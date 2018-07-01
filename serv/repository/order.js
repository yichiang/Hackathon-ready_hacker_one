//Order Information
const mysql=require('mysql');
const signIn=require('./signin.js');

// GetOrderByID(orderID,callback)
function getOrderByID(orderID,callback){
  signIn.signIn(function(con){
    var cmd = "SELECT * FROM order_tb WHERE orderId=" + orderID;
    console.log("Executing " + cmd);
    con.query(cmd, function(error, obj){
      con.end();
      callback(obj);
    });
  });
};

// AddFoodItemToOrder(IDorder,IDfood)

function addNewOrder(user, items){
  var result = true;

  signIn.signIn(function(con){
    var cmd = "INSERT INTO Order_main (StatusNew, StatusFullfilled, StatusCancelled, UserID) VALUES ({0}, {1}, {2}, {3})";
    cmd = cmd.replace("{0}", new Date());
    cmd = cmd.replace("{1}", "NULL");
    cmd = cmd.replace("{2}", "NULL");
    cmd = cmd.replace("{3}", user.UserId);

    console.log("Executing " + cmd);
    con.query(cmd, function(error, obj){
      console.log("1 record inserted, ID: " + result.insertId);
      var orderID = result.insertId;
      addFoodItemToOrder(user.UserID, orderID, )
      if(err){
        console.log(err);
        result = false;
      }
      con.end();
      callback(obj);
    });
  });
}

function addFoodItemsToOrder(orderID, user, items, callback){
  signIn.signIn(function(con){

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO order_tb (userId,orderId,itemId,qty,placed,fulfilled,canceled) VALUES ?";
      var values = [];
      for (var i = 0; i < items.length; i++) {
        var newValue = [user.UserID, orderID, items[i].ItemID, items[i].qty, items[i].placed, "NULL", "NULL"];
        values.append(newValue);
      }
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
  });
});

}
function addFoodItemToOrder(userID,orderID,foodID,callback){

  signIn.signIn(function(con){
    //Order with item ID exists
    var cmd="SELECT * FROM order_tb WHERE orderId=" + orderID + " and itemId=" + foodID;
    console.log(cmd);
    con.query(cmd,function(err,data){
      console.log("Fetched:");
      console.log(data);
      console.log(cmd);
      if(!data || data.length === 0 || !data[0]){
        var cmd="INSERT INTO order_tb (userId,orderId,itemId,qty,placed,fulfilled,canceled) VALUES ("+userID+","+orderID+","+foodID+","+"1,"+"NULL, NULL, NULL)";
        console.log(cmd);
        con.query(cmd,function(err,data){
          var result = true;
          if(err){
            console.log(err);
            result = false;
          }
          con.end();
          callback(result);
        });
      } else {
        console.log("Fetched:");
        console.log(data[0]);
        var newQty = data[0].qty + 1;
        var cmd = "UPDATE order_tb SET qty=" + newQty + " where orderId=" + orderID + " and itemId=" + foodID;
        console.log(cmd);
        con.query(cmd, function(err, data){
          var result = true;
          if(err){
            console.log(err);
            result = false;
          }
          con.end();
          callback(result);
        });
      }
    });

  });

};


//SubmitFoodOrder(OrderID)
function submitFoodOrder(orderID){

};

module.exports={
  getOrderByID : getOrderByID,
  addFoodItemToOrder : addFoodItemToOrder,
  submitFoodOrder : submitFoodOrder, 
  addNewOrder: addNewOrder
};
