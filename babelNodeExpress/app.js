var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Conexión con Mongo
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

var app = express();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

// 404 en caso de ruta no encontrada
app.use(function(req, res, next) {
  const err = new Error('404');
  err.status = 404;
  next(err);
});

module.exports = app;
