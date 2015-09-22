var PORT = 3000;

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var mongoose = require('mongoose');
var index = require('./routes/index');

// Connect to DB
var local_db_name = 'myTest';
var local_db_uri = 'mongodb://localhost/' + local_db_name;
mongoose.connect(local_db_uri);

var app = express();
var router = require('./router');

app.set('views', __dirname + '/views');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.get('/', index.view);



http.createServer(app).listen(app.get('port'), function() {
	console.log("Node.js server running on port %s.", app.get('port'));
});
