// src/components/PaymentPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; 
import { load } from '@cashfreepayments/cashfree-js';
import axios from 'axios';

const PaymentPage = () => {
    const location = useLocation();
    // console.log('Location state:', location.state);
    // const order_amount = location.state || { order_amount: 0 }; 1
    const order_amount = location.state?.order_amount || 0;
    // console.log('got amt: ',order_amount);

    // Using useRef to store cashfree SDK instance
    // let cashfree = useRef(null);
    const cashfreeRef = useRef(null);
    useEffect(() => {
        // let cashfree;
        const initializeSDK = async () => {
            try {
                if (!cashfreeRef.current) { // Initialize only if it's not already initialized
                    cashfreeRef.current = await load({
                        mode: "sandbox", // or "production"
                    });
                    console.log('Cashfree SDK initialized');
                }
            } catch (error) {
                console.error('Error initializing Cashfree SDK:', error);
            }
        }
        
        initializeSDK();
    }, []);
    // console.log('2')

    const [orderId, setOrderId] = useState('');
    // const [amount, setAmount] = useState(0);
    const [customerName, setCustomerName] = useState('');
    // const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');

    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    const savePaymentData = async ( o_id,name, amount, phone) => {
        try {
            const paymentData = {
                order_id: o_id,
                order_amount: amount, 
                customer_name: name,
                customer_phone: phone,
            }
            console.log('o_id being sent is:', paymentData.order_id);
            console.log('amt being sent is:', paymentData.order_amount);
            console.log('name being sent is:', paymentData.customer_name);
            console.log('phone being sent is:', paymentData.customer_phone);

            const response = await axios.post('http://localhost:3000/payment/process',paymentData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
    
            console.log('Payment data sent:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error sending payment data:', error);
        }
    };

    // Function to retrieve session ID for payment
    const getSessionId = async (orderId) => {
        try {
            const response = await axios.get(`http://localhost:3000/payment?order_id=${orderId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('API response for session ID:', response.data); // Debugging line
    
            if (response.data && response.data.payment_session_id) {
                console.log('Payment session ID:', response.data.payment_session_id);
                return response.data.payment_session_id;
            } else {
                console.error('No session ID found in response');
                return null;
            }
        } catch (error) {
            console.error('Error retrieving session ID:', error.response?.data || error.message);
            return null;
        }
    };

    const verifyPayment = async (orderId) => {
        try {
            console.log('Verifying payment...');
            const res = await axios.post(`http://localhost:3000/payment/verify?order_id=${orderId}`);
            
            
            if (res && res.data) {
                console.log('Payment verification response:', res.data);
                // if (res.data) { // Check for success status
                //     // alert("Payment verified");
                //     return true; // Payment verified
                // } else {
                //     // alert("Payment verification failed.");
                //     return false; // Payment not verified
                // }
                    alert("payment verified");
            }

        } catch (error) {
            console.error("Error verifying payment:", error);
        }
        // return false; // Default to false if an error occurs
    };

// Handle payment when user clicks the "Pay Now" button
const handlePayment = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!customerName || !order_amount || !customerPhone) {
        console.error("Please fill in all fields");
        return;
    }

    try {

         // Send payment data to the backend to create an order
         const orderResponse = await axios.post('http://localhost:3000/payment/createOrder', 
            {
                order_amount: order_amount,
                customer_name: customerName,
                customer_phone: customerPhone
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            }
        );

        const payData = orderResponse.data;
        console.log('Order creation response from backend:', payData);

        // Send payment data to the backend first to create an order
        // const payData = await sendPaymentData(customerName, order_amount, customerPhone);
        // console.log('Payment data received from backend:', payData);

        // Set the orderId from the response
        if (payData && payData.order_id) {
            // setOrderId(payData.order_id);
            console.log('Order ID set:', payData.order_id);
            // console.log('Order ID set:', orderId);

            // Wait for orderId state to update before proceeding
            const sessionId = await getSessionId(payData.order_id);
            console.log('Session ID retrieved:', sessionId);

            if (sessionId && cashfreeRef.current) { // Ensure session ID and SDK are present
                // Set up checkout options and trigger Cashfree payment
                let checkoutOptions = {
                    paymentSessionId: sessionId,
                    redirectTarget: '_modal',
                };

                // Trigger the payment process using Cashfree SDK
                cashfreeRef.current.checkout(checkoutOptions)
                    .then(async (response) => {
                        console.log('Payment initialized', response);
                        // saving db
                        const savedData = await savePaymentData(payData.order_id,payData.order_amount ,payData.customer_details.customer_name,payData.customer_details.customer_phone)
                        // if (!savedData || !savedData.data.order_id) {
                        // console.error("Failed to save payment data.");
                        //     return;
                        // }
                            console.log('Payment data saved:', savedData);
                        // ver
                        console.log('Verifying payment...');
                        const paymentVerified = await verifyPayment(payData.order_id);
                            
                    })
                    .catch((error) => {
                        console.error('Error during checkout initialization:', error);
                    });
                    

            } else {
                console.error("Failed to retrieve session ID or Cashfree SDK is not initialized");
            }
        } else {
            console.error("Order ID could not be retrieved from payment data");
        }
    } catch (error) {
        console.error('Error starting payment:', error);
    }
};

    return (
        <div className='m-11'>
            <h2>Make a Payment</h2>
            <div>
                <h1>Payment Page</h1>
                <p>Total Amount: {JSON.stringify(order_amount)}</p> 
                {/* // Just for debugging, remove it after */}
            </div>
            <input 
                type="text" 
                placeholder="name" 
                value={customerName} 
                onChange={(e) => setCustomerName(e.target.value)} 
            />
            <input 
                type="tel" 
                placeholder="Phone" 
                value={customerPhone} 
                onChange={(e) => setCustomerPhone(e.target.value)} 
            />

            <button 
            onClick={handlePayment}
            >Pay Now</button>
        </div>
    );
};

export default PaymentPage;
