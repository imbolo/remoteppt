var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

http.createServer(app).listen(3000, function () {
  console.log('Express server listening on port ' + 3000);
});
