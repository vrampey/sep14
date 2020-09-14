var exp = require('express');

var app = exp();
app.get('/', function(req, res){
  res.send("Hello NodeJS WebServer");
});
app.get('/home', function(req, res){
    res.send("this is my home page");
    
var exp = require("express");
});
app.get('/about' ,function(req, res) {
    res.send("<HTML><body><h1>This is my home page</h1></body></HTML>");
    
});
var port = process.env.PORT || 3000;
app.listen(port, function() {
    
  console.log("HTTP server is up on port number " + port);  
});