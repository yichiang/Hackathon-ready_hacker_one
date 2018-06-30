var mysql = require('mysql');

var createUserTable = function(conn, callback){
  conn.query("DROP TABLE IF EXISTS user CREATE TABLE user (userId INT(11), userName VARCHAR(16), displayName VARCHAR(16))",
   function (err, result) {
    if (err) throw err;
    console.log("table user created");
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
      createUserTable(conn);
    }
  });
};

laySchema();
