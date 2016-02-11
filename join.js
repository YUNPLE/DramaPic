var express        = require('express');
var path           = require('path');
var app            = express();
var async          = require('async');

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname,'/public')));

app.post('/join',function(req,res){
  console.log(req);

});

app.listen(3000,function(){
  console.log('Index.js!');
});
