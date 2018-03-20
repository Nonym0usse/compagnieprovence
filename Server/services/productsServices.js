/**
 * @Author: VELLA CYRIL <nonym0usse>
 * @Date:   2018-03-20T17:15:22+01:00
 * @Email:  contact@vella.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-03-20T17:16:45+01:00
 */



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
    codeBarre: '1234'
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
