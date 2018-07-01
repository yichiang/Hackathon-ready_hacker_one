var express = require('express')
var cors = require('cors')
var app = express()
var itemService = require('./service/item.js');
var orderService = require('./service/order.js');
var userService = require('./service/user.js');
var bodyParser = require('body-parser')

app.use(cors())

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(jsonParser);

// POST /api/login gets urlencoded bodies
app.post('/api/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  // res.send('welcome, ' + req.body.username)
  userService.singinuser(req.body, function(data){
    res.json(data);
  });
})

// POST /api/login gets urlencoded bodies
app.post('/api/order/create', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  // res.send('welcome, ' + req.body.username)
  orderService.addNewOrder(req.body, function(data){
    res.json(data);
  });
})


// get /api/user/:id gets urlencoded bodies
app.get('/api/user/:userId', urlencodedParser, function (req, res) {
  if (!req.params) return res.sendStatus(400)
  console.log(req.params)
  if(req.params.userId){
    // res.send('welcome, ' + req.body.username)
    userService.getUserById(req.params.userId, function(data){
      res.json(data);
    });
    
  }else{
    res.json([]);
  }

})


app.get('/api/item', function (req, res, next) {
  itemService.getAvailableItems(function(items){
    res.json(items);
  });
})

app.listen(3300, function () {
  console.log('CORS-enabled web server listening on port 3300')
})
