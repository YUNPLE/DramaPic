var express        = require('express');
var router         = express.Router();
var path           = require('path');
var async          = require('async');

// app.set("view engine", 'ejs');
// app.use(express.static(path.join(__dirname,'/public')));

var data={count:1};
router.get('/test',function(req,res){
  console.log('aaaa');
  // res.render('main_ejs',data);
  res.writeHead(200,{'content-type':'application/json; charset=UTF-8'});
  async.series( [
    function( callBack ){

      callBack();
    }
  ],
  function (err, results){
    if(err){
      results = {
        status:'failed',
        error:true,
        message:err
      };
      res.end( JSON.stringify(results) );
    }
    else{
      results = {
        status:'success',
        error:false,
        message:'구강희',
        response:'I Love You'
      };
      res.end (JSON.stringify(results));
    }
  });

});
