const Cart = require('../schema/cart');
const jwt = require('jsonwebtoken');

const LoadCart = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customer_id = decoded.customer_id;

        // Log the customer_id for debugging
        console.log('Customer ID:', customer_id);

        // Fetch the cart from the database
        const cart = await Cart.findOne({ customer_id });

        // Log the cart document for debugging
        console.log('Fetched Cart:', cart);

        if (!cart || !cart.cart_info || cart.cart_info.length === 0) {
            return res.status(200).json({ message: 'Cart is empty', items: [] });
        }

        // Return the cart items
        res.status(200).json({ items: cart.cart_info });
        console.log("Loaded items: ", cart.cart_info);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// const removeCartItem = async (req, res) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const customer_id = decoded.customer_id;
//         const { id } = req.params;

//         console.log("Customer ID:", customer_id);
//         console.log("Removing item with ID:", id);

//         // Check cart before update
//         const cartBeforeUpdate = await Cart.findOne({ customer_id });
//         console.log("Cart before update:", cartBeforeUpdate);

//         // Find the cart and remove the item
//         const cart = await Cart.findOneAndUpdate(
//             { customer_id },
//             { $pull: { items: { product_id: id } } },
//             { new: true }
//         );

//         console.log("Cart after update attempt:", cart);

//         if (!cart) {
//             return res.status(404).json({ message: 'Cart not found' });
//         }

//         res.status(200).json({ message: 'Item removed successfully', cart });
//         console.log('Item removed successfully', cart);
//     } catch (error) {
//         console.error('Error removing item from cart:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

const removeCartItem = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customer_id = decoded.customer_id;

        const { id } = req.params;

        // Log the customer ID and item ID to be removed
        console.log("Customer ID:", customer_id);
        console.log("Removing item with ID:", id);

        // Check the cart before update
        const cartBeforeUpdate = await Cart.findOne({ customer_id });
        console.log("Items in cart before removal:", cartBeforeUpdate.cart_info);

        // Remove the item from the cart
        const result = await Cart.updateOne(
            { customer_id },
            { $pull: { cart_info: { product_id: id } } }
        );

        // Log the result of the update operation
        console.log("Update result:", result);

        // Fetch the updated cart to return
        const updatedCart = await Cart.findOne({ customer_id });

        if (!updatedCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.status(200).json({ message: 'Item removed successfully', cart: updatedCart });
    } catch (error) {
        console.error('Error removing item from cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


const updateCartItem = async (req, res) => {
    const { id } = req.params; // Get the item ID from the URL
    const { quantity } = req.body; // Get the new quantity from the request body

    try {
        const cart = await Cart.findOne({ customer_id: req.customer_id });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const itemIndex = cart.cart_info.findIndex(item => item.product_id === id);
        if (itemIndex === -1) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }

        // Update the item's quantity and total price
        cart.cart_info[itemIndex].quantity = quantity;
        cart.cart_info[itemIndex].total_price = cart.cart_info[itemIndex].cost * quantity;

        // Recalculate grand total
        cart.grand_total = cart.cart_info.reduce((acc, item) => acc + item.total_price, 0);

        await cart.save();
        res.status(200).json({ message: 'Cart item updated successfully', cart });
    } catch (error) {
        console.error('Error updating cart item:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Add or Update Cart
const updateCart = async (req, res) => {
        try {
         
            // Check if the Authorization header is present
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Authorization header is missing' });
        }

        // Extract the token from the Authorization header
        const token = req.headers.authorization.split(' ')[1];

        // Verify and decode the token using your secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Extract customer_id from the decoded payload
        const customer_id = decoded.customer_id;

        if (!customer_id) {
            return res.status(400).json({ message: 'Customer ID is missing from the token' });
        }

        // Log the customer_id and request body for debugging
        console.log('Customer ID:', customer_id);
        console.log('Request Body:', req.body);

        let { product_id, product_name, quantity, cost} = req.body;

        cost = parseFloat(cost.replace(/,/g,''));
        quantity = parseInt(quantity, 10);

        const total_price = quantity * cost;
        
        // Log the extracted product details
        console.log('Product Details:', { product_id, product_name, quantity, cost, total_price });
        let cart = await Cart.findOne({ customer_id });

        if (cart) {
            // Check if the product already exists in the cart
            const existingProductIndex = cart.cart_info.findIndex(item => item.product_id === product_id);

            if (existingProductIndex !== -1) {
                // Update the existing product's quantity and total price
                cart.cart_info[existingProductIndex].quantity += quantity;
                cart.cart_info[existingProductIndex].total_price += total_price;
            } else {
                // Add the new product to the cart
                cart.cart_info.push({ product_id, product_name, quantity, cost, total_price });
            }

            // res.status(200).json({ message: 'Cart updated successfully', cart});

            // Recalculate the grand total
            cart.grand_total = cart.cart_info.reduce((acc, item) => acc + item.total_price, 0);

            console.log('Updated Cart: ',cart);
            // Save the updated cart
            await cart.save();
        } else {
            // Create a new cart if it doesn't exist
            cart = new Cart({
                customer_id,
                cart_info: [{ product_id, product_name, quantity, cost, total_price }],
                grand_total: total_price
            });

            console.log('New Cart: ',cart);
            await cart.save();
        }

            res.status(200).json({ message: 'Cart updated successfully', cart });
        } catch (error) {
            console.error("Error updating the cart:", error);
            res.status(500).json({ message: 'Error updating the cart' });
        }
    };

 
module.exports = { LoadCart, updateCart, removeCartItem, updateCartItem };  