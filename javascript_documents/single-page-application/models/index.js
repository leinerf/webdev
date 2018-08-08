//require models directory it looks for index.js
//requiring will run the code
var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo-api");

mongoose.Promise = Promise;
module.exports.Todo = require("./todo");
