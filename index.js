const http = require('http')
const port = 3000

const path = require('path')


var express = require("express");
var app     = express();

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'index.html'));
  //It will find and locate index.html from View or Scripts
});

app.listen(3000)
