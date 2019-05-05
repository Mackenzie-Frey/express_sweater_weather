var express = require("express");
var router = express.Router();
var User = require('../../../models').User;
var fetch = require("node-fetch");
require('dotenv').config();

router.get("/", async (req, res, next) => {
  try {
    const address = req.query.location
    const user = await User.findOne({ where: {api_key: req.body.api_key}})
    if(!user) {
        res.status(401).send(JSON.stringify('Unauthorized'));
    } else {
      const coordResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.google_key}`)
      const geoResponse = await coordResponse.json();
      const coordinates = geoResponse["results"][0]["geometry"]["location"];
      const key = process.env.dark_sky_key;
      const lat = coordinates["lat"];
      const long = coordinates["lng"];
      const forecastResponse = await fetch(`https://api.darksky.net/forecast/${key}/${lat},${long}?exclude=minutely`)
      const weatherResponse = await forecastResponse.json();
      res.status(200).send(JSON.stringify(parsedWeather(address, weatherResponse)));
    }
  }
  catch(error) {
    res.status(500).send({ error })
  }
})

function parsedWeather(address, weather) {
  return {
    "location": address,
    "currently": weather["currently"],
    "hourly": weather["hourly"],
    "daily": weather["daily"]
  };
}

module.exports = router;
