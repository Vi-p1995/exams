var bodyParser = require('body-parser');
var express = require('express');
var app=express();
lib=require('socialvi');

app.get('users',function(req,res){
  res.json(lib.showUsers());
});

app.listen(3001);

module.exports=app;
