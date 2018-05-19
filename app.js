
var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var dotenv = require('dotenv').config();
var passport = require('passport');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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

/*
var InstagramStrategy = require('passport-instagram').Strategy;

var INSTAGRAM_CLIENT_ID = '9999b9b4a7dd48c9848933df77eed962';
var INSTAGRAM_CLIENT_SECRET = '9baced46c61547c9a65d4fbc3e06b027';

passport.use(new InstagramStrategy({
        clientID: INSTAGRAM_CLIENT_ID,
        clientSecret: INSTAGRAM_CLIENT_SECRET,
        callbackURL: "http://localhost:3030/auth/instagram/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            console.log("TEStING: "+accessToken);
            // To keep the example simple, the user's Instagram profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the Instagram account with a user record in your database,
            // and return that user instead.
            return done(null, profile);
        });
    }
));
*/

app.use(passport.initialize());
app.use(passport.session());


module.exports = app;