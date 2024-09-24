const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    customer_id:{
        type: Number,
        unique: true,
        required: true
    },
    cart_info:[{
        product_id:{
            type: String,
            required: true
        },
        product_name:{
            type: String,
            required: true
        },
        quantity:{
            type: Number,
            required: true,
            default: 1,
            min: 1
        },
        cost:{
            type: Number,
            required: true
        },
        total_price:{
            type: Number,
            required: true
        }   
    }],
    shipping:{
        type: String,
        default: '' 
    },
    promo_code:{
        type: String,
        default: '' 
    },
    grand_total:{
        type: Number,
        required: true
    }
}, {
    timestamps: true 
});

const Cart = mongoose.model('Cart',CartSchema);

module.exports = Cart;