const express = require('express');
const router = express.Router();
const { saveProfileInfo, getOrders, saveOrderDetails, getProfileInfo} = require('../controller/profileController');

router.get('/userInfo', getProfileInfo)
router.post('/userInfo',saveProfileInfo);
router.get('/orders',getOrders);
router.post('/orders', saveOrderDetails);

module.exports = router;