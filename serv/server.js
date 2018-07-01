var express = require('express')
var cors = require('cors')
var app = express()
var itemService = require('./service/item.js');

app.use(cors())

app.get('/', function (req, res, next) {
  itemService.getAvailableItems(function(items){
    res.json(items);
  });
})
app.get('/api/item', function (req, res, next) {
  itemService.getAvailableItems(function(items){
    res.json(items);
  });
})

app.listen(3300, function () {
  console.log('CORS-enabled web server listening on port 3300')
})
