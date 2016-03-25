var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product')

module.exports = (function() {
  return {
    index: function(req, res ){
      Order.find({}, function(err, orders){
        console.log("hit the order database")
        res.json(orders)
      })
    },
    create: function(req, res){
      Order.create({name: req.body.name.name, qty: req.body.qty,  product: req.body.product.name}, function(err, order){
        Product.findOne({_id: req.body.product._id}, function(err, products){
           console.log( req.body.qty);
           console.log(products.qty)
          products =- req.body.qty
       
        })
        if(err){
          console.log(err);
        }
        else{
          res.json(order);
        }
      })
    }
  }
})();