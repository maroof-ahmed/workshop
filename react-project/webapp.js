// Require express from node_modules
var express = require('express');
var app = express();

// Serves static files from dirpath/static folder
app.use(express.static(__dirname + '/static'));

//app.get('/', function(req, res) {
//});

// Create http server listening on port 3000
var server = app.listen(3000, function(req, res) {
    console.log('listening on port 3000');
});
