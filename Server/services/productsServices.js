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
    nom: 'Copeaux de savon de Marseille ',
    categorie: 'savon',
    image: 'https://www.compagniedeprovence.com/557-pdt_main/copeaux-de-savon-de-marseille-350g.jpg',
    senteur: 'Aucune',
    format: '350',
    prix: '11',
    codeBarre: '123'
  }, {
    id: 2,
    nom: 'Cube de savon de Marseille ',
    categorie: 'savon',
    image: 'https://www.compagniedeprovence.com/1568-pdt_main/cube-de-savon-de-marseille-400g-olive-.jpg',
    senteur: 'Olive',
    format: '400',
    prix: '4.70',
    codeBarre: '3524891908032'
  }, {
    id: 3,
    nom: 'Savon Liquide de Marseille Thé ',
    categorie: 'savon',
    image: 'https://www.compagniedeprovence.com/1225-pdt_main/savon-liquide-de-marseille-the-noir-500-ml.jpg',
    senteur: 'Thé noir',
    format: '500',
    prix: '19',
    codeBarre: '8000500223369'
  }, {
    id: 4,
    nom: 'Bougie Parfumée Thé Blanc',
    categorie: 'bougie',
    image: 'https://www.compagniedeprovence.com/1605-pdt_main/bougie-parfumee-the-blanc-180-g.jpg',
    senteur: 'Thé blanc',
    format: '180',
    prix: '28',
    codeBarre: '453778'
  }, {
    id: 5,
    nom: 'Savon liquide de Marseille Mucem X Compagnie de Provence',
    categorie: 'savon',
    image: 'https://www.compagniedeprovence.com/2160-pdt_main/savon-liquide-de-marseille-500ml-edition-limitee-mucem.jpg',
    senteur: 'Huile olive',
    format: '500',
    prix: '25',
    codeBarre: '07542'
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
