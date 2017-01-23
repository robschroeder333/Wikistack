const express = require( 'express' );
const app = express();
const nunjucks = require( 'nunjucks' );
const PORT = 3000;


const path = require('path')
let router = require('./routes/router.js');
let wikiRouter = require('./routes/wiki.js');
let db = require('./models/index.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// module.exports = app;

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true}); // point nunjucks to the proper directory for templates
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/public')));

app.use('/wiki/', wikiRouter);
app.use('/', router);

db.User.sync({force:false})
.then(()=>{
  return db.Page.sync({force:false})})
  .then(()=>{
    app.listen(PORT, function(){
      console.log("listening on PORT 3000");
    })
  })
