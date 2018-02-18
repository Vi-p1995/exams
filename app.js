var bodyParser = require('body-parser');
var express = require('express');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented:true}));

var lib=require('socialvi');
var users=lib.users;

app.get('/users',function(req,res){
  res.json(lib.showUsers());
});

app.post('/user/registration',function(req,res){
  lib.registration();
  res.json({message: "registration successfully"});
});

app.post('/users/friendShipSend',function(req,res){
  idSender=parseInt(req.query.sender);
  idConsignee=parseInt(req.query.consignee);
  res.json(lib.friendShipSend(idSender,idConsignee));
});

app.get('/users/confirmFriendShip',function(req,res){
  idUser=parseInt(req.query.user);
  idConfirm=parseInt(req.query.userConfirm);
  res.json(lib.confirmFriendShip(idUser,idConfirm));
});

app.post('/users/post/add',function(req,res){
  idUser=parseInt(req.body.user);
  title=req.body.title;
  res.json(lib.addPost(idUser,title));
});

app.get('/users/post/',function(req,res){
  idUser=parseInt(req.query.user)-1;
  res.json(lib.users[idUser].posts);
});

app.delete('/users/post',function(req,res){
  idUser=parseInt(req.query.user);
  index=parseInt(req.query.index);
  res.json(lib.deletePost(idUser,index));
});
app.get('/users/showPostFriend',function(req,res){
  idUser=parseInt(req.query.user);
  idFriend=parseInt(req.query.friend);
  res.json(lib.showPostFriend(idUser,idFriend));
});


app.listen(3001);

module.exports=app;
