var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./modules/index.js');
var get = require('./modules/get.js');

app.use(express.static('public'));
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

app.use('/', index);
app.use('/get', get);


var port = process.env.PORT || 3000;

app.listen( port, function(){
  console.log('server up on:', port);
})//end listen
