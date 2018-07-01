//Order Information
const mysql=require('mysql');

//Connect to database.
var signIn=function(callback){
  const con=mysql.createConnection({
    host:"readyhack.cqti1tc8lxbn.us-east-1.rds.amazonaws.com",
    user: "yichiang",
    password: "yichiang"
  });

  con.connect(function(err){
    if(err) {
        console.log(err)
      }else{
      console.log("Connected!")};
      con.query("USE hackerOneFoodService", function(obj){
        console.log("Using hackerOneFoodService...");
        callback(con);
      });
    });
};

// GetOrderByID(orderID,callback)
function getOrderByID(orderID,callback){
  signIn(function(con){
    var cmd = "SELECT * FROM order_tb WHERE orderId=" + orderID;
    console.log("Executing " + cmd);
    con.query(cmd, function(error, obj){
      con.end();
      callback(obj);
    });
  });
};

// AddFoodItemToOrder(IDorder,IDfood)

function addFoodItemToOrder(orderID,foodID,callback){
//Pull down order

//Order with item ID exists
"SELECT * FROM order WHERE order id=orderID"

};


//SubmitFoodOrder(OrderID)
function submitFoodOrder(orderID){

};

module.exports={
  getOrderByID : getOrderByID,
  addFoodItemToOrder : addFoodItemToOrder,
  submitFoodOrder : submitFoodOrder
};
