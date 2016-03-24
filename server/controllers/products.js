var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
  return {
    index: function(req, res){
      Product.find({}, function(err, Product){
        res.json(Product);
        console.log("hit index controller")
      })
    },
    create: function(req, res){
     console.log("hit create")
     console.log(req.body)
      Product.create(req.body, function(err, Product){
        if(err){
          console.log(err);
        }
        else{
          res.json(Product)
        }
      })
    },
    delete: function(req, res){
      Product.remove({_id: req.params.id}, function(err, results){
        console.log(results);
      });
    }
  }// end of return 
})(); 