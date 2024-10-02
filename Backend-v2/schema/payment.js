const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    order_id: String,    
    customer_details:{
        customer_id: String,
        customer_name: String,
        customer_email: String,
        customer_phone: String 
    },
    payment_receipt: {
        cf_payment_id: String,
        payment_amount: Number,
        payment_time: Date,
        payment_status: String
    },
    order_date: { type: Date, default: Date.now }
},{
    timestamps: true
});

const payment = mongoose.model("payment",paymentSchema);

module.exports = payment;