var express = require("express");
var bodyParser = require("body-parser");
var method = require("method-override");
var exphbs = require('express-handlebars');

var newApp = express();

var routes = require("./controllers/burgers_controller.js");

var port = process.env.PORT || 8030;

newApp.use(express.static(process.cwd() + "/public"));
newApp.use(bodyParser.urlencoded({ extended: false }));

newApp.use(method("_method"));


newApp.engine("handlebars", exphbs({ defaultLayout: "main" }));
newApp.set("view engine", "handlebars");

newApp.use("/", routes);

newApp.listen(port);