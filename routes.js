var fs = require('fs');
var querystring = require('querystring');
var comments = require('./comments.js');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

var getComments = function(req,res){
	res.end(JSON.stringify(comments.getAll()));
};
app.use(express.static('./public'));

app.get('/guestBook',function(req,res){
	res.redirect('/guestBook.html');
})
app.post('/comment',function(req,res){
	var data = {};
	data.name = req.body.name;
	data.comment = req.body.comments;
	comments.add(data);
	getComments(req,res);
})
module.exports = app;