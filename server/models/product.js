var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {type: String, required: true },
  imageUrl: {type: String, required: true},
  qty: {type: String, required:true},
  created_at: {type: Date, default: Date.now}
})

mongoose.model('Product', ProductSchema);