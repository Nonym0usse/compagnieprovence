'use strict';

const
  express = require('express'),
  products = require('../services/productsServices');

let router = express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', products.getProducts);
router.get('/:id', products.getProductsById);

module.exports = router;


