const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMidware');
const { LoadCart, updateCart, removeCartItem, updateCartItem } = require('../controller/cartController');

// Adjusted routes
router.get('/', authMiddleware, LoadCart);
router.post('/', authMiddleware, updateCart);
router.delete('/:id', authMiddleware, removeCartItem);
router.put('/:id', authMiddleware, updateCartItem);

module.exports = router;