// paymentController.js
require('dotenv').config();
const {Cashfree} = require("cashfree-pg");
const crypto = require('crypto')
const jwt = require("jsonwebtoken");
const payment = require('../schema/payment');

function genOrderId( ){
  const uniqueId = crypto.randomBytes(16).toString('hex');

  const hash = crypto.createHash('sha256');
  hash.update(uniqueId);

  const OrderId = hash.digest('hex');

  return OrderId.substring(0,12);
}

Cashfree.XClientId = process.env.CASHFREE_CLIENT_ID;
Cashfree.XClientSecret = process.env.CASHFREE_CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

const sessionStore = {}; // Temporary in-memory store for session IDs

const createOrder = async (req,res) =>{

  try {
              // Retrieve token from request headers
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    // Decode token to get customer details
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret key

    const customer_id = decoded.customer_id.toString();
    const customer_email = decoded.email.toString(); // Assuming the email is included in the token payload

    console.log('cust-id: ', customer_id);
    console.log('cust_email: ', customer_email);

    const {order_amount,customer_name,customer_phone } = req.body

    console.log('amount bk: ',order_amount)
    console.log('name bk: ',customer_name)
    console.log('phone bk: ',customer_phone)

    
    let request = {
      // "order_id" : await genOrderId(),
      "order_amount": order_amount,
      "order_currency": "INR",
      "customer_details": {
        "customer_id" : customer_id,
        "customer_name" : customer_name,
        "customer_phone": customer_phone,
        "customer_email": customer_email,
      },
      order_meta: {
        // return_url: "https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}",
        // return_url: "http://localhost:5137/payment/verify?order_id={order_id}",
        notify_url: "https://webhook.site/adf17ed2-6b78-42a4-b6d1-2b4e396dce81",
      },
    }

    Cashfree.PGCreateOrder("2022-09-01", request)
  .then(async (response) => {
    console.log(response.data);

    // Store session ID in memory
    // sessionStore[request.order_id] = response.data.payment_session_id;
    sessionStore[response.data.order_id] = response.data.payment_session_id;

    res.json(response.data);
  })
  .catch((error) => {
    console.error('Error in PGCreateOrder:', error.response ? error.response.data : error.message);
    res.status(400).json({ error: 'Failed to create payment order', details: error.response ? error.response.data : error.message });
  });

  } catch (error) {
    console.error('error',error)
  }
}

const verifyPayment = async (req, res) => {
  try {
    console.log('Verifying in backend');
    let orderId = String(req.query.order_id);
    console.log('Order ID being sent:', orderId);

    // Fetch the payments for the given order ID
    const response = await Cashfree.PGOrderFetchPayments("2023-08-01", orderId);
    const payments = response.data; // Assuming `response.data` is an array of payment objects
    console.log('payment response: ',payments);

    if (payments ) {
      // Extract data from the first element (a[0]) and second element (a[1])
      const paymentData = payments[0]; // Contains cf_payment_id and payment_amount
      
      // Check if the order_id matches in paymentData1 (since order_id only appears once)
      if (paymentData.order_id === orderId) {
        // Update the payment document in the database
        const updatedPayment = await payment.findOneAndUpdate(
          // { order_id: paymentData1.order_id }, // Find document by order_id
          { order_id: orderId},
          {
            $set: {
              "payment_receipt": {
                cf_payment_id: paymentData.cf_payment_id,
                payment_amount: paymentData.payment_amount,
                payment_time: paymentData.payment_time,
                payment_status: paymentData.payment_status
              }
            }
          },
          { new: true, upsert: true } // `new: true` returns the updated document; `upsert: true` creates a new document if not found
        );

        console.log('Payment details updated successfully', updatedPayment);
        res.json({ success: true, message: 'Payment verified and updated successfully', data: updatedPayment });
      } else {
        res.status(400).json({ error: 'Order ID does not match in the payment response' });
      }
    } else {
      res.status(400).json({ error: 'Payment verification failed or insufficient payment data' });
    }
  } catch (error) {
    console.log('Error verifying payment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// const verifyPayment = async (req, res) => {
//   try {
//     console.log('Verifying in backend');
//     let orderId = req.query.order_id;

//     const response = await Cashfree.PGOrderFetchPayments("2023-08-01", orderId);
//     const paymentData = response.data;
//     console.log(paymentData)
//     if (paymentData && paymentData.cf_order_id) {
//       const updatedPayment = await payment.findOneAndUpdate(
//         { order_id: paymentData.order_id }, // Find document by order_id
//         {
//           $set: {
//             "payment_receipt": {
//               cf_payment_id: paymentData.cf_payment_id,
//               payment_amount: paymentData.payment_amount,
//               payment_time: paymentData.payment_time,
//               payment_status: paymentData.payment_status
//             }
//           }
//         },
//         { new: true, upsert: true } // `new: true` returns the updated document; `upsert: true` creates a new document if not found
//       );

//       console.log('Payment details updated successfully', updatedPayment);
//       res.json({ success: true, message: 'Payment verified and updated successfully', data: updatedPayment });
//     } else {
//       res.status(400).json({ error: 'Payment verification failed or data is incomplete' });
//     }
//   } catch (error) {
//     console.log('Error verifying payment:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


const processPayment = async (req, res) => {
  try {
    console.log('Processing and saving payment...');

    // Extract data from request body
    const { order_id, order_amount, customer_name, customer_phone } = req.body;

    // Validate the incoming data
    if (!order_id || !order_amount || !customer_name || !customer_phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Fetch the payment details from Cashfree using the order ID
    const response = await Cashfree.PGFetchOrder("2023-08-01", order_id);

    // Ensure the response contains valid data
    if (response && response.data && response.data.cf_order_id) {
      // Extract relevant data
      const paymentData = {
        order_id: response.data.order_id,
        cf_order_id: response.data.cf_order_id,
        customer_details: {
          customer_id: response.data.customer_details.customer_id,
          customer_name: response.data.customer_details.customer_name,
          customer_email: response.data.customer_details.customer_email,
          customer_phone: response.data.customer_details.customer_phone,
        },
      };

      // Log payment data for debugging
      console.log('Payment data to be saved:', paymentData);

      // Save payment details to your MongoDB database
      const newPayment = new payment(paymentData);
      await newPayment.save();

      console.log('Payment data saved successfully:', paymentData);

      // Return a success response with saved data
      res.status(200).json({
        message: 'Payment data processed and saved successfully',
        paymentData,
      });
    } else {
      return res.status(400).json({ error: 'Failed to fetch order data or invalid response from Cashfree' });
    }

  } catch (error) {
    console.error('Error processing payment data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getSessionId = async (req, res) => {
  try {
    console.log('hi')
    const orderId = req.query.order_id; // Extract order_id from query parameters

    console.log(orderId)
    if (!orderId) {
      return res.status(400).json({ error: "order_id is required" });
      }
    // Logic to fetch session ID from Cashfree or your database
    // const sessionData = await Cashfree.PGOrderFetchPayments("2023-08-01", orderId);
    const sessionId = sessionStore[orderId];

    if (!sessionId) {
      return res.status(404).json({ error: "Session ID not found" });
    }

    res.json({ payment_session_id: sessionId });

  } catch (error) {
    console.error('Error fetching session ID:', error.message);
    res.status(500).json({ error: 'Failed to retrieve session ID', details: error.message });
  }
};

const validateWebhook = (req, res) => {
  try {
    const signature = req.headers["x-webhook-signature"];
    const rawBody = req.rawBody;
    const timestamp = req.headers["x-webhook-timestamp"];

    // Verify the webhook signature
    Cashfree.PGVerifyWebhookSignature(signature, rawBody, timestamp);

    console.log("Webhook validated successfully.");
    res.status(200).send("Webhook received and validated");
  } catch (err) {
    console.error("Webhook validation failed:", err.message);
    res.status(400).send("Invalid webhook signature");
  } 
};

module.exports = {verifyPayment, validateWebhook, createOrder, processPayment, getSessionId}
