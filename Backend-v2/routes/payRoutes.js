const express = require('express');
const router = express.Router();
const {verifyPayment, createOrder, validateWebhook, processPayment, getSessionId} = require('../controller/payController');

router.post('/verify', verifyPayment);
router.post('/process', processPayment)
router.post('/createOrder', createOrder);
router.get('/',getSessionId);
router.post('/webhook', validateWebhook);

module.exports = router;