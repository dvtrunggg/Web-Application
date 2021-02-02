var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var ipadRouter = require('./routes/ipad');
var iphoneRouter = require('./routes/iphone');
var macRouter = require('./routes/mac');
var watchRouter = require('./routes/watch');
var dataRouter = require('./api/api_routes/router_api');
var bagRouter = require('./routes/bag');
var adminRouter = require('./routes/admin');
var detailRouter = require('./routes/detail');

var app = express();
  
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ipad', ipadRouter);
app.use('/iphone', iphoneRouter);
app.use('/mac', macRouter);
app.use('/watch', watchRouter);
app.use('/data', dataRouter);
app.use('/bag', bagRouter);
app.use('/admin', adminRouter);
app.use('/detail', detailRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;