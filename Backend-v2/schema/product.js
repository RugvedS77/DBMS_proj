const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category_name: { type: String, required: true},
  asin: { type: String, required: true },
  data: {
    product_title: { type: String, required: true },
    product_price: { type: String, required: true },
    product_original_price: { type: String },
    currency: { type: String },
    product_star_rating: {type: String},
    product_photo: { type: String }, // Store as base64 or URL
    sales_volume: { type: String },
    about_product: { type: [String] }
  },
  product_information: {
    type: Map,
    of: String,
    default: {},
  }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;