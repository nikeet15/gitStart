//Ctrl+j to toggle terminal

//for express
var express = require("express");
var app = express();                                 // express() return an object 

//for body-parser using this only req.body will work ie getting content in form of object from a "form"
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static("public"));                  //making public a static directory
app.set("view engine", "ejs");                      //if written no need to write .ejs only write name of file

// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });

app.get("/", function(req, res){

    res.render("index");
});

app.post("/result",function(req,res){
    var r= req.body.movie;
    console.log(typeof(r));
     res.redirect("/" + r);
    // res.send(r);
});

const axios = require('axios');
app.get("/:movie",function(req,res){
    var r= req.params.movie;
    axios.get("http://www.omdbapi.com/?apikey=d79a17f1&s="+r)     // my APIKEY= d79a17f1
        .then(function (response) {
            // handle success
            console.log(response.data);
            res.render("result", {a: response.data, b: r});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            console.log("over");
        });
});

app.get("*", function(req, res){
    res.send("404 page Not found please try again");
})

//starting server code..............................
app.listen(3000, function () {
    console.log("server started");
});
