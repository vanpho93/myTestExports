module.exports = function(app, parser){
  app.post('/dangky', parser, function(req, res){
    res.send('hello ' + req.body.username);
  });
}
