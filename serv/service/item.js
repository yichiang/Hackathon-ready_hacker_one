var itemRepo = require('../repository/item.js');

var getAvailableItems = function(callback){
  itemRepo.getAvailableItems(function(data){
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
  getAvailableItems: getAvailableItems
};
