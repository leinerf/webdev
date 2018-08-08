var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var port = process.env.PORT || 5000;
var routes = require('./routes/todos');
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use('/api/todos',routes);

app.listen(port,function(){
    console.log("listening to port " + port);
});