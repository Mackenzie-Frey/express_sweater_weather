var express = require("express");
var router = express.Router();
var User = require('../../../models').User;
var Location = require('../../../models').Location;
var Favorite = require('../../../models').Favorite;

router.post("/", async (req, res, next) => {
  try {
    const location = req.body.location;
    const user = await User.findOne({ where: {api_key: req.body.api_key}})
    if(!user) {
      res.status(401).send(JSON.stringify('Unauthorized'))
    } else {
      const foundLocation = await Location.findOrCreate({where: {name: location}})
      const favorite = await Favorite.findOrCreate({where: {UserId: user.id, LocationId: foundLocation[0].id}})
      const message = {'message': `${location} has been added to your favorites`}
      res.status(200).send(JSON.stringify(message))
    }
  }
  catch {
    res.status(500).send({ error })
  }
})


router.get("/", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: {api_key: req.body.api_key}})
    if(!user) {
      res.status(401).send(JSON.stringify('Unauthorized'))
    } else {
      const favorites = await Favorite.find({where: {UserId: user.id}})

      
    }
  }
  catch {
    res.status(500).send({ error })
  }
})

module.exports = router;
