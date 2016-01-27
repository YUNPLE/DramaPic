// function helloWorld(){
//   for(i=1 ; i<100 ; i++){
//     if(i%3 === 0 && i%5 === 0){
//       console.log('a');
//     }
//     else if(i%3 === 0){
//       console.log('m');
//     }
//     else if(i%5 === 0){
//       console.log('d');
//     }
//     else{
//       console.log(i);
//     }
//   }
// }
// helloWorld();
var express = require('express');
var path = require('path');
var app = express();

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname,'/public')));

var data={count:0};

app.get('/', function (req,res){
  data.count++;
  // res.send('Hello World');
  res.render('main_ejs',data);
});
app.get('/reset', function (req,res){
  data.count = 0;
  res.render('main_ejs',data);
});
app.get('/set/count',function (req,res){
  if(req.query.key){
      data.count = req.query.key;
  }
  res.render('main_ejs',data);
});
app.get('/set/:num',function (req,res){
  data.count = req.params.num;
  res.render('main_ejs',data);
});
app.listen(3000, function(){
  console.log('Server Started!');
});
