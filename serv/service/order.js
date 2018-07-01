var orderRepo = require('../repository/order.js');


var addNewOrder = function(user, items, callback){
    orderRepo.addNewOrder(user, items, function(data){
    callback(data);
  });
};

var getAllOrders = function(callback){
  orderRepo.getAllOrders(function(data){
  // var ret = [];
  // for(var i = 0; i < data.length; i++){
  //   ret.push({
  //     id: data[i].id,
  //     name: data[i].name,
  //     desc: data[i].description,
  //     imageSrc: data[i].imgUrl,
  //     price: data[i].price
  //   });
  // }

  callback(data);
});
};

module.exports = {
    addNewOrder: addNewOrder,
    getAllOrders: getAllOrders
};
