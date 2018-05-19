var express = require('express');
var request = require('request');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GreatVapeCo'});
});


router.get('/googlereviews', function (req, res) {

    //Return without exception if env is missing
    if(process.env.GOOGLE_PLACE_ID === undefined || process.env.GOOGLE_PLACES_KEY === undefined){
        //res.json("error");
        //return;
    }
    else {
        var url = "https://maps.googleapis.com/maps/api/place/details/json?placeid="+process.env.GOOGLE_PLACE_ID+"&key="+process.env.GOOGLE_PLACES_KEY;
        request.get({ url: url }, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                res.json(body);
            }
        });
    }
});

/*
var InstagramTokenStrategy = require('passport-instagram-token');
var InstagramStrategy = require('passport-instagram').Strategy;

var INSTAGRAM_CLIENT_ID = '9999b9b4a7dd48c9848933df77eed962';
var INSTAGRAM_CLIENT_SECRET = '9baced46c61547c9a65d4fbc3e06b027';
*/
/*
passport.use(new InstagramStrategy({
        clientID: INSTAGRAM_CLIENT_ID,
        clientSecret: INSTAGRAM_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/instagram/callback"
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
));*/

//app.use(passport.initialize());
//app.use(passport.session());

/*
passport.use(new InstagramTokenStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    passReqToCallback: true
}, function(req, accessToken, refreshToken, profile, next) {
    console.log("req: "+req);
    console.log("Accesstoken: "+accessToken);

}));
*/
/*
const Instagram = require('node-instagram').default;
// Create a new instance.
const instagram = new Instagram({
    clientId: '9999b9b4a7dd48c9848933df77eed962',
    clientSecret: '9baced46c61547c9a65d4fbc3e06b027',
    accessToken: 'user-access-token',
});*/

module.exports = router;
