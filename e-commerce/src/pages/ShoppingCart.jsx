import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [promoCode, setPromoCode] = useState('');
    const shippingCost = 5.00;

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
        if (!itemToUpdate) return;

        const newQuantity = Math.max(1, itemToUpdate.quantity + delta);
        const updatedItems = cartItems.map(item => 
            item.product_id === id ? { ...item, quantity: newQuantity } : item
        );

        setCartItems(updatedItems);

        // Update the quantity in the database
        const token = localStorage.getItem('token');
        await axios.put(`http://localhost:3000/cart/${id}`, {
            quantity: newQuantity
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    };

    const handleRemoveItem = async (id) => {
        console.log('removing id: ',id);
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
                                                <span className="font-bold text-gray-800 text-lg">{item.product_name}</span>
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
                            <button className="bg-indigo-500 hover:bg-indigo-600 py-3 text-white rounded-full w-full mt-4 font-semibold transition-transform transform hover:scale-105">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ShoppingCart = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [promoCode, setPromoCode] = useState('');
//     const shippingCost = 5.00;

//     useEffect(() => {
//         const fetchCart = async () => {
//             const token = localStorage.getItem('token');
//             try {
//                 const response = await axios.get('http://localhost:3000/cart', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 setCartItems(response.data.items || []); // Adjust based on your API response
//                 console.log("data fetched: ",response.data);
//             } catch (error) {
//                 console.error("Error fetching cart:", error);
//             }
//         };
//         fetchCart();
//     }, []);

//     const handleQuantityChange = async (id, delta) => {
//         try {
//             const updatedItems = cartItems.map(item => {
//                 if (item.id === id) {
//                     const newQuantity = Math.max(1, item.quantity + delta);
//                     return { ...item, quantity: newQuantity };
//                 }
//                 return item;
//             });
//             setCartItems(updatedItems);
            
//             // Update the quantity in the database
//             const token = localStorage.getItem('token');
//             await axios.put(`http://localhost:3000/cart/${id}`, {
//                 quantity: newQuantity
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//         } catch (error) {
//             console.error("Error updating quantity:", error);
//         }
//     };

//     const handleRemoveItem = async (id) => {
//         try {
//             const updatedItems = cartItems.filter(item => item.id !== id);
//             setCartItems(updatedItems);
            
//             // Make a DELETE request to remove the item from the cart in the database
//             const token = localStorage.getItem('token');
//             await axios.delete(`http://localhost:3000/cart/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//         } catch (error) {
//             console.error("Error removing item:", error);
//         }
//     };

//     const handleClearCart = () => {
//         setCartItems([]);
//     };

//     const handlePromoCodeChange = (e) => {
//         setPromoCode(e.target.value);
//     };

//     const totalCost = cartItems.reduce((acc, item) => acc + parseFloat(item.total_price) * parseInt(item.quantity, 10), 0) + shippingCost;

//     return (
//         <div className="bg-gradient-to-r from-indigo-100 to-purple-100 min-h-screen">
//             <div className="container mx-auto mt-10 px-4">
//                 <div className="lg:flex lg:space-x-12">
//                     <div className="lg:w-2/3 bg-white shadow-xl rounded-lg p-8 h-full">
//                         <h1 className="font-bold text-3xl text-gray-800 mb-8 border-b pb-4">Shopping Cart</h1>

//                         <div className="hidden md:flex justify-between font-semibold text-gray-500 uppercase text-sm mb-6">
//                             <h3 className="w-2/5">Product Details</h3>
//                             <h3 className="w-1/5 text-center">Quantity</h3>
//                             <h3 className="w-1/5 text-center">Price</h3>
//                             <h3 className="w-1/5 text-center">Total</h3>
//                         </div>

//                         {cartItems.length === 0 ? (
//                             <p className="text-center text-gray-600">Your cart is empty</p>
//                         ) : (
//                             cartItems.map(item => (
//                                 <div key={item.product_id} className="flex items-center justify-between border-b pb-6 mb-6 bg-gray-50 p-4 rounded-lg hover:shadow-lg transform transition-transform duration-200">
//                                     <div className="flex w-2/5">
//                                         <div className="ml-4 flex flex-col justify-between">
//                                             <span className="font-bold text-gray-800 text-lg">{item.product_name}</span>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-center w-1/5">
//                                         <button onClick={() => handleQuantityChange(item.product_id, -1)} className="text-gray-600 hover:text-gray-800">
//                                             <svg className="fill-current w-4" viewBox="0 0 448 512">
//                                                 <path d="M416 208H32v32h384v-32z" />
//                                             </svg>
//                                         </button>
//                                         <input className="mx-2 border text-center w-12 rounded" type="text" value={item.quantity} readOnly />
//                                         <button onClick={() => handleQuantityChange(item.product_id, 1)} className="text-gray-600 hover:text-gray-800">
//                                             <svg className="fill-current w-4" viewBox="0 0 448 512">
//                                                 <path d="M416 208H32v32h384v-32z M240 32v384h32V32h-32z" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                     <div className="w-1/5 text-center">
//                                         <span className="font-semibold text-lg text-gray-800">₹{item.cost.toFixed(2)}</span>
//                                     </div>
//                                     <div className="w-1/5 text-center">
//                                         <span className="font-semibold text-lg text-gray-800">₹{(item.total_price).toFixed(2)}</span>
//                                     </div>
//                                 </div>
//                             ))
//                         )}

//                         <div className="flex justify-between items-center mt-6">
//                             <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">Continue Shopping</a>
//                             <button onClick={handleClearCart} className="bg-red-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-600 shadow-lg transition-transform transform hover:scale-105">Clear Cart</button>
//                         </div>
//                     </div>

//                     <div className="lg:w-1/3 bg-white shadow-xl rounded-lg p-8 mt-8 lg:mt-0">
//                         <h1 className="font-bold text-2xl text-gray-800 border-b pb-4">Order Summary</h1>

//                         <div className="mt-6 mb-8">
//                             <div className="flex justify-between font-semibold text-lg text-gray-600 mb-2">
//                                 <span>Items {cartItems.length}</span>
//                                 <span>₹{totalCost.toFixed(2)}</span>
//                             </div>
//                             <div className="mt-4">
//                                 <label className="font-medium text-gray-700 text-sm">Shipping</label>
//                                 <select className="block w-full mt-2 border border-gray-300 rounded-lg p-2 text-sm bg-gray-50 hover:shadow-md transition-shadow">
//                                     <option>Standard Shipping - ₹5.00</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="mb-8">
//                             <label htmlFor="promo" className="font-semibold text-gray-700 text-sm">Promo Code</label>
//                             <input type="text" id="promo" className="block w-full border rounded-lg mt-2 p-2 text-sm bg-gray-50 shadow-inner" placeholder="Enter your code" value={promoCode} onChange={handlePromoCodeChange} />
//                         </div>

//                         <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 w-full rounded-full shadow-lg transition-transform transform hover:scale-105">Apply</button>

//                         <div className="border-t pt-6 mt-8">
//                             <div className="flex justify-between font-semibold text-lg text-gray-800">
//                                 <span>Total cost</span>
//                                 <span>₹{totalCost.toFixed(2)}</span>
//                             </div>
//                             <button className="bg-indigo-500 hover:bg-indigo-600 py-3 text-white rounded-full w-full mt-4 font-semibold transition-transform transform hover:scale-105">Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShoppingCart;
