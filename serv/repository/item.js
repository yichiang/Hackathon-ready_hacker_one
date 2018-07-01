const mysql=require('mysql');
const signin=require('./signin.js');

var getAvailableItems = function(callback){
  signin.signIn(function(con){
    var cmd = "SELECT * FROM item";
    con.query(cmd, function(err, data){
      if(err){
        console.log(err);
        callback(err);
      }
      con.end();
      callback(data);
    });
  });
};

module.exports = {
  getAvailableItems: getAvailableItems
};
