'use strict';

const
  express = require('express'),
  products = require('../services/productsServices');

let router = express.Router();

router.get('/', products.getProducts);
router.get('/:id', products.getProductsById);

module.exports = router;


