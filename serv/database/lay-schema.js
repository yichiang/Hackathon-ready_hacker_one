var mysql = require('mysql');

var createUserTable = function(conn, callback){
  conn.query("CREATE TABLE user (userId INT(11), userName VARCHAR(16), displayName VARCHAR(16), PRIMARY KEY (userId))",
   function (err, result) {
    if (err) throw err;
    console.log("table user created");
    callback();
  });
};

var createItemTable = function(conn, callback){
  conn.query("CREATE TABLE item (itemId INT(11), name VARCHAR(32), description VARCHAR(512), price INT(11), imgUrl VARCHAR(128), PRIMARY KEY (itemId))",
   function (err, result) {
    if (err) throw err;
    console.log("table item created");
    callback();
  });
};

var createOrderTable = function(conn, callback){
  conn.query("CREATE TABLE order_tb (orderId INT(11), userId INT(11), itemId INT(11), qty INT(11), placed DATE, fulfilled DATE, canceled DATE, PRIMARY KEY (orderId), FOREIGN KEY (userId) REFERENCES user(userId), FOREIGN KEY (itemId) REFERENCES item(itemId))",
   function (err, result) {
    if (err) throw err;
    console.log("table order created");
    callback();
  });
};

var createDatabase = function(conn, callback){
  conn.query("CREATE DATABASE hackerOneFoodService",
   function (err, result) {
    if (err) throw err;
    console.log("database hackerOneFoodService created");
    conn.query("USE hackerOneFoodService",
     function (err, result) {
      if (err) throw err;
      console.log("database hackerOneFoodService created");
      callback();
    });
  });
};

var laySchema = function(){
  var conn = mysql.createConnection({
      host: 'readyhack.cqti1tc8lxbn.us-east-1.rds.amazonaws.com',
      user: 'yichiang',
      password : 'yichiang'
  });

  conn.connect(function(err){
    if(err){
      console.log('An error occurred connecting to sql server. ' + err);
      throw err;
    } else {
      console.log('Connection successful...');
      createDatabase(conn, function(){
        createUserTable(conn, function(){
          createItemTable(conn, function(){
            createOrderTable(conn, function(){
              console.log("Done!");
              conn.end();
            });
          });
        });
      });
    }
  });
};

laySchema();
