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

var app = express();

app.get('/', function (req,res){
  res.send('Hello World');
});

app.listen(3000, function(){
  console.log('Server Started!');
});
