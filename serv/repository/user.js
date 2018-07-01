const mysql=require('mysql');
const signin=require('./signin.js');

//WARNING: This function is not secure, it will need to be rewrite
var singinuser = function(user, callback){
  signin.signIn(function(con){
    var cmd = "SELECT * FROM hackerOneFoodService.user WHERE userName='{0}' and password='{1}'";
    cmd = cmd.replace("{0}", user.username);
    cmd = cmd.replace("{1}", user.password);
    console.log("cmd", cmd)
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

var getUserById = function(userId, callback){
  signin.signIn(function(con){
    var cmd = "SELECT * FROM hackerOneFoodService.user WHERE userId=" + userId;
   
    console.log("cmd", cmd)
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
  singinuser: singinuser,
  getUserById: getUserById
};
