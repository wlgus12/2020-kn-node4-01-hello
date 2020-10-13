var express = require('express');
var app = express();

app.listen(3000, function(){
    console.log("http://127.0.0.1:3000");
});

app.get('/', function(req,res,next){
    res.send('<h1>Hello Word</h1>')
});
app.get('/wlgus12', function(req,res,next){
    res.send('<h1>Hello jenny</h1>')
});
