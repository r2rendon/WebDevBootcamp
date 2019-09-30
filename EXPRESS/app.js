const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Hey what's up!");
});

app.get("/:user", function(req, res){
    var usr = req.params.user;
    res.send("Hi "+usr.toLocaleUpperCase()+"!!");
});

app.listen(3000, function(){
    console.log("I'm listening you on port 3000");
});