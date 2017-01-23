const express = require('express');
const router = express.Router();
module.exports = router;
let db = require('../models/');


router.get('/', function(req, res, next){
  console.log("user reached home page")
  res.send("hi");
});

router.post('/', function(req,res,next){
  res.send(db);
})

router.get('/add', function(req,res,next){
  res.render('addpage', {
    Page:{title: "Tomatoes"},
    User:{name:"Rob", email:"rob@gmail.com"},
    showForm: true
  });
})
