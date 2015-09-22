var PORT = 3000;

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var index = require('./routes/index');
var router = require('./router');

// Connect to DB
var local_db_name = 'myTest';
var local_db_uri = 'mongodb://localhost/' + local_db_name;
mongoose.connect(local_db_uri);

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);

app.use('/', router);



http.createServer(app).listen(app.get('port'), function() {
	console.log("Node.js server running on port %s.", app.get('port'));
});
