var express = require('express');
var app = express();
var port = 3000;
var path = require('path');
var bodyParser = require('body-parser');
var url = 'mongodb://localhost:27017/myapp';



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/myapp");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
});
var User = mongoose.model("User", nameSchema);

app.get('', function(req, res) {
  res.sendFile(path.join(__dirname + '/form/form.html'));
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database")
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});





app.listen(port, () => {
    console.log("Server listening on port " + port);
});
