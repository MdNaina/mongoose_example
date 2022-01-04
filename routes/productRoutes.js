const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controller/productControllers')

// GET all products, url = /api/products
router.get('/', getAllProducts)

// GET a product, url = /api/products/:id
router.get('/:id', getProductById)

module.exports = router;
