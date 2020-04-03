//Ctrl+j to toggle terminal

var express= require("express");
var app= express();

app.get("/",function(req,res){   
    var r= req.params;                              //contains nothing if no route parameter is used
    res.send("Welcome to first express assignment");
    // res.render("index.ejs");
});

app.get("/:type/:id",function(req,res){
    var r= req.params;
    console.log(r.type+" "+r.id);
        
    if(r.type == "speak")
    {   if(r.id=="pig")
            res.send(r.id+" says Oink Oink");

        else if(r.id=="cow")
            res.send(r.id+" says Moo");

        else if(r.id=="dog")
            res.send(r.id+" says Woof Woof");
    }
});

app.get("/:type/:id/:cnt",function(req,res){
    var r= req.params;
    console.log(r.type+" "+r.id);
            
    if(r.type == "repeat")
    {
        if(r.id="hello")
        {
            if(r.cnt=="3")
                res.send("hello hello hello");

            else if(r.cnt=="5");
                res.send("hello hello hello hello hello");
        }

        else if(r.id="blah")
            res.send("blah blah");
    }
});

app.get("*", function(req, res){
    res.send("sorry page not found");
});

//starting server code..............................
app.listen(3000,function(){
    console.log("server started");
});