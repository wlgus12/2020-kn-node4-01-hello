var express = require('express');
var app = express();
var path = require('path');

app.listen(3000, function(){
    console.log("http://127.0.0.1:3000");
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
//console.log(path.join(__dirname,'./public'));
app.use('/',express.static(path.join(__dirname,'./public')));


app.get('/hello', function(req,res,next){
    res.send('<html><head><title>Hi~</title></head><body><h1>Hello World</h1></body></html>')
});
/* app.get('/wlgus12', function(req,res,next){
    res.send('<h1>Hello jenny</h1>')
}); */

app.get('/sample', function(req,res,next){
    var title = '샘플페이지'; 
    var content = 'Hello샘플' ;
    var html = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        <h1>${content}</h1>
    </body>
    </html>
    `;
    res.send(html);
});



app.get('/search', function(req,res){
    var q = req.query.q;
    res.send(`<h1>당신이 요청한 쿼리는 ${q}입니다.</h1>`);
});

app.get('/user/:id', function(req,res){
    var id = req.params.id;
    /* request = 요청하다 params라는 변수에서 아이디를 찾아라 */
    res.send(`<h1>안녕하세요 ${id}님.</h1>`);
});

app.post('/join', function(req,res){
    var userid = req.body.userid;
    var userpw = req.body.userpw;
    res.send(`<h1>${userid} / ${userpw}</hl>`)
});