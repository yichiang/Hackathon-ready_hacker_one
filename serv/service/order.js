var orderRepo = require('../repository/order.js');


var addNewOrder = function(user, items, callback){
    orderRepo.addNewOrder(user, items, function(data){
    callback(data);
  });
};

var updateOrder = function(order, callback){
  orderRepo.updateOrder(order, function(result){
    callback(result);
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

var getOrderedItemsCSV = function(callback){
  orderRepo.getOrderedItems(function(data){
    console.log(data);
  });
};

module.exports = {
    addNewOrder: addNewOrder,
    updateOrder: updateOrder,
    getAllOrders: getAllOrders,
    getOrderedItemsCSV: getOrderedItemsCSV
};
