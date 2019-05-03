var express = require("express");
var router = express.Router();
var User = require('../../../models').User;
var fetch = require("node-fetch");
require('dotenv').config();
pry = require('pryjs');


router.get("/", function(req, res, next) {
  var address = req.query.location
  // return here or set equal to a variable and return later
  return User.findOne({ where: {api_key: req.body.api_key}})
    .then(user => {
      return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.google_key}?exclude=minutely`)
    })
      .then(function(response) {
        eval(pry.it);
        // Everything below this returns a 401. Put this line below into pry and go from there.
        return response.json();
      })
        .then(function(coordResponse) {
          var coordinates = coordResponse["results"][0]["geometry"]["location"]
          var key = process.env.dark_sky_key
          var lat = coordinates["lat"]
          var long = coordinates["long"]

          return fetch(`https://api.darksky.net/forecast/${key}/${lat},${long}`)
            .then(function(response) {
              return response.json();
            })
              .then(function(weatherResponse) {
                res.send(JSON.stringify(parsedWeather(address, weather)));
              })
        })


  .catch(error => {
    res.status(401).send(JSON.stringify('Unauthorized'));
  })
});


function parsedWeather(address, weather) {
  return {
    "location": address,
    "currently": "object",
    "hourly": "object",
    "daily": "object"
  };
}




module.exports = router;

//  Is the catch error okay as a 401 ? That way if invalid api_key it returns 401.

// if (apiKey === undefined) {
//   res.status(401).send(JSON.stringify('Unauthorized'));
// }


// NOT CURRENTLY SETUP FOR INCORRECT API KEYS NOT WORKING
