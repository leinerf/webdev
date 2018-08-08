var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var port = process.env.PORT || 5000;
var routes = require('./routes/todos');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



app.use('/api/todos',routes);




app.get("/", function(req, res){
    res.sendFile("index.html")
})

app.listen(port,function(){
    console.log("listening to port " + port);
});