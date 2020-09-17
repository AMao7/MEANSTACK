var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'pug');
app.set('views','./views');

app.get('', function(req, res) {
  res.sendFile(path.join(__dirname + '/form/form.html'));
});

app.get('/views', function(req, res){
   res.render('views');
});

app.use(express.urlencoded({
  extended: true
}))

app.post('/form', (req, res) => {
  const username = req.body.username
  //...
  res.end()
})

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
