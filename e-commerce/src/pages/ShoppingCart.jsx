

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextComponent from '../helpers/TextComponent';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const shippingCost = 5.00;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:3000/cart', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCartItems(response.data.items || []); // Adjust based on your API response
        console.log("data fetched: ", response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);

  const handleQuantityChange = async (id, delta) => {
    const itemToUpdate = cartItems.find(item => item.product_id === id);
    console.log(`Item to update:`, itemToUpdate); // Log the item to update
    if (!itemToUpdate) return;

    const newQuantity = Math.max(1, itemToUpdate.quantity + delta);
    console.log(`Updating quantity for product ID: ${id}, New Quantity: ${newQuantity}`); // Log the new quantity
    const updatedItems = cartItems.map(item =>
      item.product_id === id ? { ...item, quantity: newQuantity, total_price: item.cost * newQuantity } : item
    );

    setCartItems(updatedItems);

    // Update the quantity in the database
    const token = localStorage.getItem('token');
    await axios.put(`http://localhost:3000/cart/${id}`, {
      product_id: id,
      quantity: newQuantity
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // console.log(`Updating product with ID: ${id}, New Quantity: ${newQuantity}`);
  };

  const handleRemoveItem = async (id) => {
    console.log('removing id: ', id);
    try {
      const updatedItems = cartItems.filter(item => item.product_id !== id);
      setCartItems(updatedItems);

      // Make a DELETE request to remove the item from the cart in the database
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          console.log("Item removed:", response.data);
        })
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleClearCart = async () => {
    // You may want to add logic to clear the cart in the backend as well
    setCartItems([]);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  // const handleCheckout = async (totalAmount) => {
  //   try {
  //     // Retrieve the JWT token from localStorage
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       console.error("User is not authenticated. Token not found.");
  //       return;
  //     }
  
  //     // Make a POST request to the backend payment initiation endpoint
  //     const response = await axios.post(
  //       "http://localhost:3000/payment", // Ensure this URL matches your backend
  //       {
  //         order_id: `order_${Date.now()}`, // Create a unique order ID
  //         order_amount: totalAmount,       // Use the total amount from your cart state
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Send the token in the Authorization header
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  
  //     // Redirect to the payment page using the link from the response
  //     // if (response.data && response.data.payment_link) {
  //     //   console.log("Payment request successful:", response.data);
  //     //   window.location.href = response.data.payment_link; // Redirect to the Cashfree payment page
  //     // } else {
  //     //   console.error("Payment link not found in the response:", response.data);
  //     // }
  //   } catch (error) {
  //     console.error("Error initiating payment:", error);
  //   }
  //   navigate('/payment', { state: { order_amount: totalCost } });
  // };
  
  const handleCheckout = (totalCost) => {
    // Navigate to the payment page with the total amount
    console.log('fetch amt: ',totalCost);
    navigate('/payment', { state: { order_amount: totalCost } });
    console.log('passed amt: ',totalCost);
  };

  const totalCost = cartItems.reduce((acc, item) =>
    acc + (parseFloat(item.total_price) * parseInt(item.quantity, 10)), 0) + shippingCost;

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 min-h-screen">
      <div className="container mx-auto mt-10 px-4">
        <div className="lg:flex lg:space-x-12">
          <div className="lg:w-2/3 bg-white shadow-xl rounded-lg p-8 h-full">
            <h1 className="font-bold text-3xl text-gray-800 mb-8 border-b pb-4">Shopping Cart</h1>

            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600">Your cart is empty</p>
            ) : (
              <>
                {cartItems.map(item => (
                  <div key={item.product_id} className="flex items-center justify-between border-b pb-6 mb-6 bg-gray-50 p-4 rounded-lg hover:shadow-lg transform transition-transform duration-200">
                    <div className="flex w-2/5">
                      <div className="ml-4 flex flex-col justify-between">
                        <span className="font-bold text-gray-800 text-lg">
                          <TextComponent text={item.product_name} />
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <button onClick={() => handleQuantityChange(item.product_id, -1)} className="text-gray-600 hover:text-gray-800">
                        <svg className="fill-current w-4" viewBox="0 0 448 512">
                          <path d="M416 208H32v32h384v-32z" />
                        </svg>
                      </button>
                      <input className="mx-2 border text-center w-12 rounded" type="text" value={item.quantity} readOnly />
                      <button onClick={() => handleQuantityChange(item.product_id, 1)} className="text-gray-600 hover:text-gray-800">
                        <svg className="fill-current w-4" viewBox="0 0 448 512">
                          <path d="M416 208H32v32h384v-32z M240 32v384h32V32h-32z" />
                        </svg>
                      </button>
                      <button onClick={() => handleRemoveItem(item.product_id)} className="text-red-600 hover:text-red-800 ml-2">
                        Remove
                      </button>
                    </div>
                    <div className="w-1/5 text-center">
                      <span className="font-semibold text-lg text-gray-800">₹{item.cost.toFixed(2)}</span>
                    </div>
                    <div className="w-1/5 text-center">
                      <span className="font-semibold text-lg text-gray-800">₹{(item.total_price).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </>
            )}

            <div className="flex justify-between items-center mt-6">
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">Continue Shopping</a>
              <button onClick={handleClearCart} className="bg-red-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-600 shadow-lg transition-transform transform hover:scale-105">Clear Cart</button>
            </div>
          </div>

          <div className="lg:w-1/3 bg-white shadow-xl rounded-lg p-8 mt-8 lg:mt-0">
            <h1 className="font-bold text-2xl text-gray-800 border-b pb-4">Order Summary</h1>

            <div className="mt-6 mb-8">
              <div className="flex justify-between font-semibold text-lg text-gray-600 mb-2">
                <span>Items {cartItems.length}</span>
                <span>₹{totalCost.toFixed(2)}</span>
              </div>
              <div className="mt-4">
                <label className="font-medium text-gray-700 text-sm">Shipping</label>
                <select className="block w-full mt-2 border border-gray-300 rounded-lg p-2 text-sm bg-gray-50 hover:shadow-md transition-shadow">
                  <option>Standard Shipping - ₹5.00</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="promo" className="font-semibold text-gray-700 text-sm">Promo Code</label>
              <input type="text" id="promo" className="block w-full border rounded-lg mt-2 p-2 text-sm bg-gray-50 shadow-inner" placeholder="Enter your code" value={promoCode} onChange={handlePromoCodeChange} />
            </div>

                        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 w-full rounded-full shadow-lg transition-transform transform hover:scale-105">Apply</button>

                        <div className="border-t pt-6 mt-8">
                            <div className="flex justify-between font-semibold text-lg text-gray-800">
                                <span>Total cost</span>
                                <span>₹{totalCost.toFixed(2)}</span>
                            </div>
                            <button className="bg-indigo-500 hover:bg-indigo-600 py-3 text-white rounded-full w-full mt-4 font-semibold transition-transform transform hover:scale-105"
                             onClick={() => handleCheckout(totalCost)}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
