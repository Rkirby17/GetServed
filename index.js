const http = require('http');
const path = require('path');
var express = require("express");

const port = 3000;

var app     = express();

// var js      = require('js/script.js');
//js.sayhi();

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'index.html'));
  //It will find and locate index.html from View or Scripts
  //require(path.join(__dirname, 'js/script.js'));
});

app.get('/js/:filename', function(req, res) {
    console.log(req.params.filename);
   res.sendFile(path.join(__dirname, 'js/' + req.params.filename)); 
});

app.get('/css/:filename', function(req, res) {
    console.log(req.params.filename);
   res.sendFile(path.join(__dirname, 'css/' + req.params.filename)); 
});

app.listen(3000);
