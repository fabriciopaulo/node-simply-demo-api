/*
* Arquivo principal da aplicação NodeJS.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuario = require('./routes/usuario');
var autor = require('./routes/autor');
var categoria = require('./routes/categoria');
var noticia = require('./routes/noticia');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuario', usuario);
app.use('/autor', autor);
app.use('/categoria', categoria);
app.use('/noticia', noticia);

module.exports = app;
