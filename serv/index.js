var http = require('http');
var itemService = require('./service/item.js');
var port = 8080;

var handleRequest = function(request, response){
    if(request.url.indexOf('api/item') !== -1){
      itemService.getAvailableItems(function(items){
        response.end(JSON.stringify(items));
      });
    }
    console.log(request.url);
};

http.createServer(handleRequest).listen(port, function(){
    console.log("Server listening at: http://localhost:%s", port);
});
