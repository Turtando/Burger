//Establish the PORT and require our Express module
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//Static content in the public directoryf
app.use(express.static("public"));

//Parse body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import Routes
var routes = require("./controllers/burgerController.js");

app.use(routes);


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

