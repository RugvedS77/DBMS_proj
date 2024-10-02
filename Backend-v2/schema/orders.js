const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        required: true,
        unique: true, // Ensure each order has a unique ID
    },
    order_id: {
        type: String,
        required: true,
        unique: true, // Ensure each order has a unique ID
    },
    ordered_on: { // Change field name to be more conventional (camelCase)
        type: Date,
        // required: true, // Ensure this field is required
    },
    shipping_date: { // Change field name to be more conventional (camelCase)
        type: Date,
        // required: true,
    },
    delivery_date: { // Change field name to be more conventional (camelCase)
        type: Date, // Change to Date type
        // required: true,
    },
    total_cost: {
        type: Number,
        //required: true,
    },
    status: {
        type: String,
        // required: true,
        //enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], // Consider using an enum for predefined statuses
    },
    // products: [{
    //     product_name: {
    //         type: String,
    //         required: true,
    //     },
    //     cost: {
    //         type: Number,
    //         required: true,
    //     },
    //     quantity: { // Consider adding quantity for each product
    //         type: Number,
    //         required: true,
    //         default: 1, // Default value for quantity
    //     },
    //     // product_id: { // Optionally include a product ID if you have a reference to a Product model
    //     //     type: String,
    //     //     required: true,
    //     // },
    // }],
}, { timestamps: true }); // Enable timestamps to track createdAt and updatedAt

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
