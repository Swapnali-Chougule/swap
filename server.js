var express=require("express");
var app=express();

app.get("/",(req,res)=>
{
    res.send(
"<h1> Smart Agree</h1>"
+"<hr />"
+"<h3> smart agreee details</h3>"
+"<br/>"
+"<ol>"
+"<li> fertilizer </>"

+"<h3>seeds:</h3>"
+"<h3>pasticide:</h3>"
+"</ol>"



    );
});



var server=app.listen(9000);
console.log("smartagree online portal running on 9000 port");
