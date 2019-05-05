var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
var User = require('../../../models').User;
var Location = require('../../../models').Location;
var Favorite = require('../../../models').Favorite;
pry = require('pryjs');

router.post("/", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: {api_key: req.body.api_key}})
    if(!user) {
      res.status(401).send(JSON.stringify('Unauthorized'))
    } else {
      const location = req.body.location;
      const foundLocation = await Location.findOrCreate({where: {name: location}})
      const favorite = await Favorite.findOrCreate({where: {UserId: user.id, LocationId: foundLocation[0].id}})
      const message = {'message': `${location} has been added to your favorites`}
      res.status(200).send(JSON.stringify(message))
    }
  }
  catch(error) {
    res.status(500).send({ error })
  }
})

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: {api_key: req.body.api_key}})
    if(!user) {
      res.status(401).send(JSON.stringify('Unauthorized'))
    } else {
      const favorites = await Favorite.findAll({where: {UserId: user.id}})
      const weatherResponse = await Promise.all(favorites.map(async favorite => {
        const location = await Location.findOne({where: {id: favorite.LocationId}})
        const coordResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.name}&key=${process.env.google_key}`)
        const geoResponse = await coordResponse.json();
        const coordinates = geoResponse["results"][0]["geometry"]["location"];
        const key = process.env.dark_sky_key;
        const lat = coordinates["lat"];
        const long = coordinates["lng"];
        const forecastResponse = await fetch(`https://api.darksky.net/forecast/${key}/${lat},${long}?exclude=minutely`)
        const weather = await forecastResponse.json();
        return {
          "location": location.name,
          "current_weather": weather.currently
        }
      }))
      res.status(200).send(JSON.stringify(weatherResponse));
    }
  }
  catch(error) {
    res.status(500).send({ error })
  }
})

router.delete("/", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: {api_key: req.body.api_key}})
    if(!user) {
      res.status(401).send(JSON.stringify('Unauthorized'))
    } else {
      const location = req.body.location;
      const foundLocation = await Location.findOne({where: {name: location}})
      const favorite = await Favorite.destroy({where: {UserId: user.id, LocationId: foundLocation.id}})
      res.status(204).send()
    }
  }
  catch(error) {
    res.status(500).send({ error })
  }
})

module.exports = router;
