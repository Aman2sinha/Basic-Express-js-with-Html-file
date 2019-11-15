var express = require("express");
var app =express();
var path=require("path");
app.get("/", function(req,res){
res
.status(200)
.sendFile(path.join(__dirname,"public","index.html"));
}); 

app.listen(3000,function(){
    console.log("we are listening at port 3000")
 });
