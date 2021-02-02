var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var session = require('express-session');
var mongoStoreFactory = require('connect-mongo');

var MongoStore = mongoStoreFactory(session);
var MongoClient = require('mongodb').MongoClient;

var indexRouter = require('./routes/index');
var ipadRouter = require('./routes/ipad');
var iphoneRouter = require('./routes/iphone');
var macRouter = require('./routes/mac');
var watchRouter = require('./routes/watch');
var bagRouter = require('./routes/bag');

const { Session } = require('inspector');

 var url = "mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority";
// var url = 'mongodb+srv://hoangnam:khongbiet@webproject.s6fki.mongodb.net/manga_web?retryWrites=true&w=majority'
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, (err, client)=>{
  if(err){
    console.log("cannot connect DB: ",err );
  }
  else{
    console.log("DB is connected");
    // const collection = client.db('shopping').collection('products');
    // client.close();
  }
});
var app = express();
  
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret : 'mysuperscret',
  resave : false,
  saveUninitialized: false,
  store : new MongoStore({ mongooseConnection: mongoose.connection}),
  cookie: {maxAge: 180*60*1000}
}));


app.use('/', indexRouter);
app.use('/ipad', ipadRouter);
app.use('/iphone', iphoneRouter);
app.use('/mac', macRouter);
app.use('/watch', watchRouter);
app.use('/bag', bagRouter);

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
