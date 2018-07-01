var orderRepo = require('../repository/order.js');


var addNewOrder = function(callback){
    orderRepo.addNewOrder(function(data){
    var ret = [];
    for(var i = 0; i < data.length; i++){
      ret.push({
        id: data[i].id,
        name: data[i].name,
        desc: data[i].description,
        imageSrc: data[i].imgUrl,
        price: data[i].price
      });
    }

    callback(ret);
  });
};

module.exports = {
    addNewOrder: addNewOrder
};
