var express = require('express');
var request = require('request');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GreatVape'});
});


router.get('/googlereviews', function (req, res) {

    //Return without exception if env is missing
    if(process.env.GOOGLE_PLACE_ID1 === undefined || process.env.GOOGLE_PLACES_KEY === undefined){
        res.json("error");
    }
    else {
        var url = "https://maps.googleapis.com/maps/api/place/details/json?placeid="+process.env.GOOGLE_PLACE_ID+"&key="+process.env.GOOGLE_PLACES_KEY;
        request.get({ url: url }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(body);
            }
        });
    }

});

module.exports = router;
