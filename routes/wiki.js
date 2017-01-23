const express = require('express');
const router = express.Router();
module.exports = router;
let db = require('../models/');
let page = db.Page;
let user = db.User;


router.get('/', function(req, res, next){
  console.log("user reached home page")
  // res.send("hello");
  // next();
  // res.render('wikipage');
  res.redirect('/');
})

router.post('/', function(req, res, next){
  //name, email, page title, text, status
  console.log(req.body);
  var tempUser = user.build({
    name: req.body.name,
    email: req.body.email
  })
  var tempPage = page.build({
    title: req.body.title,
    // urlTitle: this.hooks.beforeValidate(tempPage),
    content: req.body.text,
    status: req.body.status
  })
  tempUser.save();
  tempPage.save();
  // res.redirect('/');
  res.json(tempPage);
})

router.get('/add', function(req,res,next){
  res.render('addpage',{showForm:true});
})

router.get('/:urlTitle', function (req, res, next) {
  res.send('hit dynamic route at ' + req.params.urlTitle);
});
