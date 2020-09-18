var express = require('express');
var app = express();
var port = 3000;
var path = require('path');
var bodyParser = require('body-parser');
var url = 'mongodb://localhost:27017/myapp';
var bodyParser = require('body-parser');
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('index');
 });  // This is for the home page


 app.get('/addname', function(req, res){
    res.render('addname');
 });
 // This is the saved details page

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/myapp1");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
});
var User = mongoose.model("User", nameSchema);

// This creates or uses an exisitng db and adds the user details as strings


app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
        res.render('saved');
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });
       });

// This will redirect you the saved page after successfully adding your details

app.get("/getdetails", function (req, res) {
    User.find({}, function(err, users) {
    if (err) throw err;
    // object of all the users
    res.render('hello',{users:users});
})
});

// This is the database page


app.listen(port, () => {
    console.log("Server listening on port " + port);
});
