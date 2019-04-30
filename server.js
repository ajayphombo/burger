var express= require("express");
var bodyParser=require("body-parser");
var PORT= process.env.PORT || 3000;
var methodOverride= require ("method-override");
var app =express();


//app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(methodOverride("_method"))
var exphbs= require("express-handlebars");

app.engine("handlebars",exphbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");

var routes= require ("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("tasting/testing at localhost: "+ PORT);
})
