import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const Checkout = () => {
  const [orderId, setOrderId] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentSessionId, setPaymentSessionId] = useState(''); 

  const handleCheckout = async () => {
    try {
      // 1. Create order on your backend
      const response = await axios.post('/create-order', {
        orderId,
        amount, 
      });

      // 2. Get the payment session ID from the response
      setPaymentSessionId(response.data.cf_order_id); // Assuming Cashfree sends it back

      // 3. Redirect to Cashfree (replace with Cashfree's actual redirect method)
      window.location.href = `https://test.cashfree.com/billpay/checkout/post/submit?cf_order_id=${response.data.cf_order_id}`; // Correct the URL structure 
    } catch (error) {
      console.error('Error during checkout:', error);
      // Handle errors gracefully (e.g., display an error message)
    }
  };

  return (
    <div>
      <input
        type="text"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Order ID"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={handleCheckout}>Pay Now</button>
    </div>
  );
};

export default Checkout;