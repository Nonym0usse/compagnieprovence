'use strict';

const
  products = [{
    id: 1,
    nom: 'test',
    categorie: 'test',
    image: '',
    senteur: '',
    format: '',
    prix: '',
    codeBarre: ''
  }, {
    id: 2,
    nom: 'test',
    categorie: 'test',
    image: '',
    senteur: '',
    format: '',
    prix: '',
    codeBarre: ''
  }, {
    id: 3,
    nom: 'test',
    categorie: 'test',
    image: '',
    senteur: '',
    format: '',
    prix: '',
    codeBarre: ''
  }, {
    id: 4,
    nom: 'test',
    categorie: 'test',
    image: '',
    senteur: '',
    format: '',
    prix: '',
    codeBarre: ''
  }, {
    id: 5,
    nom: 'test',
    categorie: 'test',
    image: '',
    senteur: '',
    format: '',
    prix: '',
    codeBarre: ''
  }];


function getProducts(req, res) {
  res.json(products);
}

function getProductsById(req, res) {
  let id = req.params.id || 0,
    result = {};

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      result = products[i];
      break;
    }
  }

  res.json(result);
}

module.exports = {
  getProducts: getProducts,
  getProductsById: getProductsById
};

