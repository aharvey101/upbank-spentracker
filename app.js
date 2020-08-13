const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// error handler
app.use(function (err, req, res, next) {

  // if in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
  }
});

module.exports = app;
