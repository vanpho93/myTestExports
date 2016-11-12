var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser =  bodyParser.urlencoded({extended: false});

var server  = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);

require('./dangky.js')(app, urlencodedParser)

app.get('/', function(req, res){
  res.send(`
    <form action="/dangky" method="post">
      <input type="text" name="username"/>
      <input type="submit" value="gui"/>
    </form>
  `)
});
