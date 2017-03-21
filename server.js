// call express module
var express = require('express');

// Create our app
var app = express();

// app used public folder for read application
app.use(express.static('public'));

// app will listen to port 3000
app.listen(3000, function () {
  console.log('Express server is up port 3000');
});
