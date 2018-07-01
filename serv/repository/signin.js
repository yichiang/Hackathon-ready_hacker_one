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

module.exports={
  signIn : signIn
};
