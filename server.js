var express = require("express");
var app = express();
var cfenv = require("cfenv");

var appEnv = cfenv.getAppEnv();
cloudantService = appEnv.getService("customerDB");


/******************************
* APIs 
*******************************/

var customers = require("./customers");
app.get('/api/v1/customers', function(req, res) {
  customers.list(req,res);
});
var port = process.env.PORT || 9080;
app.listen(port, function() {
    console.log('App started on port:' + port);
});

