var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

buffer = fs.readFileSync(index.html);
var words = buffer.toString('utf8');

app.get('/', function(request, response) {

  response.send(words);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
