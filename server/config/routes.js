var customers = require('./../controllers/customers.js')
var orders = require('./../controllers/orders.js')
var products = require('./../controllers/products.js')
module.exports = function(app){
  app.get('/customers', function(req, res){
    console.log('routes get /customers')
    customers.index(req, res); 
  })
  app.post('/customers', function(req, res){
    console.log("routes customers post");
    customers.create(req, res);
  })

  app.delete('/customers/:id', function(req, res){
    console.log("routes customers delete");
    customers.delete(req, res);
  })

  app.get('/products', function(req, res){
    console.log("routes get /products");
    products.index(req, res);
  })

  app.post('/products', function(req, res){
    products.create(req, res);
    console.log("routes post /products")
  })

  // app.get('/orders', function(req, res){
  //  console.log("hit the orders")
  //   orders.index(req, res); 
  // })

  // app.post('/orders', function(req, res){
  //   console.log("hit the post for orders")
  //   orders.create(req, res);
  // })
}