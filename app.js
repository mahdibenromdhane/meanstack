var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var dbConfig = require('./db');
var mongoose = require('mongoose');



mongoose.connect(dbConfig.url);


mongoose.connection.on('connected', function () {
    console.log("Connected to database");
});

mongoose.connection.on('error', function (error) {
    console.log("Error when trying to connect to the database : " + error);
});

var users = require('./api/User');

var notifications = require('./api/Notification');
var forums = require('./api/Forum');
var statistics = require('./api/Statistic');
var factures = require('./api/Facture');
var sujets = require('./api/Sujet');
var commentaires = require('./api/Commentaire');
var likes = require('./api/Like');
var mail = require('./api/mail');
var reclamations = require('./api/Reclamations');
var app = express();
var guides = require('./api/Guides');
var historyCars = require('./api/CarHistory');
var cars = require('./api/Car');
var quiz = require('./api/quiz');
var UserScoreQuiz = require('./api/UserScoreQuiz');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var passport = require('passport');
var expressSession = require('express-session');
// TODO - Why Do we need this key ?
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());


var flash = require('connect-flash');
app.use(flash());


//Passport
var initPassport = require('./passport/init');
initPassport(passport);

var index = require('./index')(passport);



app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/reclamations/', reclamations);
app.use('/api/mail/', mail);
app.use('/api/cars/', cars);
app.use('/api/car/guides', guides);
app.use('/api/car/history', historyCars);
app.use('/api/users', users);
app.use('/api/notifications', notifications);
app.use('/api/forums', forums);
app.use('/api/statistics', statistics);
app.use('/api/factures', factures);
app.use('/api/sujets', sujets);
app.use('/api/commentaires', commentaires);
app.use('/api/likes', likes);
app.use('/api/quiz', quiz);
app.use('/api/quiz/user', UserScoreQuiz);
app.use('/', index);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


