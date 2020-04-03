//Ctrl+j to toggle terminal

//for express
var express= require("express");
var app= express();                                 // express() return an object 

//for body-parser using this only req.body will work ie getting content in form of object from a "form"
var bodyparser= require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static("public"));                  //making public a static directory
// app.set("view engine", "ejs");                   //if written no need to write .ejs only write name of file

var a = ["nikeet", "kritank", "saurav"];

app.get("/",function(req,res){   
    var r= req.params;                              //contains nothing if no route parameter is used
    res.send("Welcome to first express assignment");
    // res.render("index.ejs");
});

app.get("/friends",function(req, res){
    res.render("index.ejs", {a: a});
});

app.post("/addfriend", function(req, res){
    console.log(req.body.newfriend);
    // res.send("adding friend will take place here just for debugging");
    a.push(req.body.newfriend);
    res.redirect("/friends");
});

app.get("*", function(req, res){                    // default if nothing
    res.send("sorry page not found");
});

//starting server code..............................
app.listen(3000,function(){
    console.log("server started");
});
