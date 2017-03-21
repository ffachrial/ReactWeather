// call express module
var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

// app used public folder for read application
app.use(express.static('public'));

// app will listen to port 3000
app.listen(PORT, function () {
  console.log('Express server is up port ' + PORT);
});
