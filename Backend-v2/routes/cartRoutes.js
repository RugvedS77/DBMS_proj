const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMidware');
const {LoadCart, updateCart, removeCartItem, updateCartItem} = require('../controller/cartController');

router.get('/cart',authMiddleware, LoadCart);
router.post('/cart',authMiddleware, updateCart);
router.delete('/cart/:id',authMiddleware, removeCartItem);
router.put('/cart/:id',authMiddleware, updateCartItem)

module.exports = router;