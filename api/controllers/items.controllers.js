var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// Display all the items
module.exports.itemsGetAll = function(req, res) {           
  console.log('GET all the items');

  Item
    .find()
    .exec(function(err, items) {
      console.log("Found items", items.length);
      res
        .status(200)
        .json(items);
    });
};


// Display one specific item
module.exports.itemsGetOne = function(req, res) {           
  console.log('GET a specific item');
  var id = req.params.id;    
  console.log("go get: " + id);    
  Item
    .findById(id)
    .exec(function(err, items) {        
      console.log("Found 1 item");
      res
        .status(200)
        .json(items);
    });
    
};


module.exports.itemsAbout = function(req, res) {           
  console.log('GET the About Page');
  res
    .status(200)
    .send('<h2> Display the About Information </h2>');
};

module.exports.itemsGetPhones = function(req, res) {           
  console.log('GET the phones');
  
  Item
    .find({type : "phone"})
    .exec(function(err, items) {
      console.log("Found items", items.length);
      res
        .status(200)
        .json(items);
    });
    
};

module.exports.itemsGetCases = function(req, res) {           
  console.log('GET the cases');
  
  Item
    .find({type : "case"})
    .exec(function(err, items) {
      console.log("Found items", items.length);
      res
        .status(200)
        .json(items);
    });
    
};

