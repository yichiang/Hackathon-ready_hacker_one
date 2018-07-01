var userRepo = require('../repository/user.js');

var singinuser = function(user, callback){
  userRepo.singinuser(user, function(data){
    var ret = [];
    for(var i = 0; i < data.length; i++){
      ret.push({
        userId: data[i].userId,
        userName: data[i].userName,
        displayName: data[i].displayName,
        password: data[i].password,
      });
    }

    callback(ret);
  });
};

module.exports = {
  singinuser: singinuser
};
