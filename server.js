var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public/dist/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res){
    console.log('root route');
});

app.get('/seattle', function(req, res){
    console.log('seattle route');
});

app.get('/sanjose', function(req, res){
    console.log('san jose route');
});

app.get('/burbank', function(req, res){
    console.log('burbank route');
});

app.get('/dallas', function(req, res){
    console.log('dallas route');
});

app.get('/dc', function(req, res){
    console.log('dc route');
});

app.get('/chicago', function(req, res){
    console.log('chicago route');
});

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(8000, function(){
    console.log("Listening on 8thou");
})