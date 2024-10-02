const express = require('express');
const router = express.Router();
const { uploadProdData, getProdData_all, getProdData_one, getProdByCategory, getProdDetail} = require('../controller/prodController');

router.post('/upload-product', uploadProdData);
router.get('/product-details', getProdData_all);
router.get('/products/:id', getProdData_one);
router.get('/:category', getProdByCategory);
router.get('/:asin', getProdDetail);

module.exports = router;