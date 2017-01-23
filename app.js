const express = require( 'express' );
const app = express();
const nunjucks = require( 'nunjucks' );
const PORT = 3000;

const path = require('path')
const routes = require('./routes');
const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = app;
