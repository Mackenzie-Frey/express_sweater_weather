var express = require("express");
var router = express.Router();
var User = require('../../../models').User;
var fetch = require("node-fetch");
require('dotenv').config();
pry = require('pryjs');


router.get("/", function(req, res, next) {
  var address = req.query.location
  return User.findOne({ where: {api_key: req.body.api_key}})
  .then(user => {
    if(!user) {
        res.status(401).send(JSON.stringify('Unauthorized'));
    } else {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.google_key}`)
        .then(function(response) {
          return response.json();
        })
          .then(function(coordResponse) {
            var coordinates = coordResponse["results"][0]["geometry"]["location"];
            var key = process.env.dark_sky_key;
            var lat = coordinates["lat"];
            var long = coordinates["lng"];

            return fetch(`https://api.darksky.net/forecast/${key}/${lat},${long}?exclude=minutely`)
              .then(function(response) {
                return response.json();
              })
                .then(function(weatherResponse) {
                  res.send(JSON.stringify(parsedWeather(address, weatherResponse)));
                })
          })
    }
  })
  .catch(error => {
    res.status(500).send({ error })
  })
});

function parsedWeather(address, weather) {
  return {
    "location": address,
    "currently": weather["currently"],
    "hourly": weather["hourly"],
    "daily": weather["daily"]
  };
}

module.exports = router;
