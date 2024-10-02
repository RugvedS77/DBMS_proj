require('dotenv').config();
const Users = require('../schema/user');
const Order = require('../schema/orders') // Replace with the actual path to your user model
const payment = require('../schema/payment');
const jwt = require('jsonwebtoken'); // Make sure to require jwt for token verification

// const token = req.headers.authorization?.split(" ")[1];
//         if (!token) {
//             return res.status(401).json({ error: 'Authorization token missing' });
//         }

//         // Decode the token to get customer details
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const customer_id = decoded.customer_id;

const saveProfileInfo = async (req, res) => {
    // Extract profile data from request body
    const { name, age, gender, address, state, country, pincode } = req.body;

    try {
        // Get the authorization token from the headers
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Authorization token missing" });
        }

        // Decode token to get customer details
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret key
        const customer_id = decoded.customer_id; // Get customer ID from the token payload

        console.log('Customer ID: ', customer_id);

        // Use findOneAndUpdate to update the existing profile
        const updatedProfile = await Users.findOneAndUpdate(
            { customerID: customer_id }, // Filter condition
            {
                username: name,
                age: age,
                gender: gender,
                address: address,
                state: state,
                country: country,
                PIN: pincode,
                // updatedAt: Date.now(), // Update timestamp
            },
            { new: true, runValidators: true } // Options: return the updated document and validate
        );
        console.log('updated data: ',updatedProfile);
        if (updatedProfile) {
            return res.status(200).json({ message: 'Profile updated successfully', updatedProfile });
        } else {
            return res.status(404).json({ message: 'Profile not found' });
        }
    } catch (error) {
        console.error('Error saving profile:', error);
        return res.status(500).json({ message: 'Server error', error });
    }
}

const getOrders = async(req,res)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: 'Authorization token missing' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customer_id = decoded.customer_id; // Adjust based on your token structure

        const orders = await Order.find({ customer_id: customer_id });

        console.log("order data bk:",orders)
        return res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        return res.status(500).json({ message: 'Server error', error });
    }
}

const saveOrderDetails = async (req, res) => {
    try {
        console.log('saving order data....')
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: 'Authorization token missing' });
        }

        // Decode the token to get customer details
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customer_id = decoded.customer_id;

        // Extract the order_id from the request body
        // const { order_id } = req.body; 

        // Fetch payment details from the Payment collection using the order_id
        // const paymentDetails = await payment.findOne({ customer_id: customer_id });
        const paymentDetailsArray = await payment.find({ 'customer_details.customer_id': customer_id });

            // Check if payment details exist and ensure the array is not empty
            if (!paymentDetailsArray || paymentDetailsArray.length === 0) {
                return res.status(404).json({ message: 'Payment not found' });
            }

            // Extract the first payment from the array
            const paymentDetails = paymentDetailsArray[0];

            console.log("payment details: ", paymentDetails);

            // Check if an order with this order_id already exists
            const existingOrder = await Order.findOne({ order_id: paymentDetails.order_id });

            if (existingOrder) {
                // Optionally, you can update the existing order or simply skip
                return res.status(400).json({ message: 'Order already exists' });
            }

            // Create a new order using payment details
            const newOrder = new Order({
                order_id: paymentDetails.order_id,
                ordered_on: paymentDetails.order_date, // Assuming you have an order_date field in Payment
                shipping_date: new Date(), // Set this to the current date or a specific value
                delivery_date: null, // You may set this based on your delivery logic
                total_cost: paymentDetails.payment_receipt.payment_amount, // Assuming this field exists in Payment
                status: paymentDetails.payment_receipt.payment_status, // Assuming this field exists in Payment
                // products: paymentDetails.payment_receipt.products, // Adjust this based on your Payment schema
                customer_id: paymentDetails.customer_details.customer_id // Associate with the customer
            });

            
        // Save the order
        console.log("saved order data: ",newOrder)
        await newOrder.save();
        return res.status(201).json({ message: 'Order saved successfully', newOrder });
    } catch (error) {
        console.error('Error saving order:', error);
        return res.status(500).json({ message: 'Server error', error });
    }
};

const getProfileInfo = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: 'Authorization token missing' });
        }

        // Decode the token to get customer details
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customer_id = decoded.customer_id;

        const profile = await Users.findOne({ customerID: customer_id });

        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        res.status(200).json(profile); // Return the latest profile data
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Error fetching profile' });
    }
};

module.exports = { saveProfileInfo, getProfileInfo, getOrders, saveOrderDetails };
