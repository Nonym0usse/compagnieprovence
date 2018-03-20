
const express = require('express'),
      router = express.Router();
      // products = require('./lefichierjsondesproduits');


router.get('/:pizza_id', (req,res,next) => {
  getProductById(req,res,next);
});


function getProductById(req,res,next){
  pizzaSchema.findOne({_id: req.params.pizza_id})
    .populate('ingredient_ids')
    .exec((err, pizza) =>{
    if(err){
      console.error(err);
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
  res.send(pizza);
}
  next();
});
}
