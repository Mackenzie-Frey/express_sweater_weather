var express = require("express");
var router = express.Router();
var User = require('../../../models').User;
var Location = require('../../../models').Location;
var Favorite = require('../../../models').Favorite;

router.post("/", function(req, res, next) {
  var location = req.body.location;
  return User.findOne({ where: {api_key: req.body.api_key}})
    .then(user => {
      if(!user) {
        res.status(401).send(JSON.stringify('Unauthorized'))
      } else {
        return Location.findOrCreate({where: {name: location}})
          .then(foundLocation => {
            return Favorite.findOrCreate({where: {UserId: user.id, LocationId: foundLocation[0].id}})
            .then(favorite => {
              var message = {'message': `${location} has been added to your favorites`}
              res.status(200).send(JSON.stringify(message))
            })
            .catch(error => {
              res.status(500).send({ error })
            })
          })
          .catch(error => {
            res.status(500).send({ error })
          })
      }
    })
  .catch(error => {
    res.status(500).send({ error })
  })
});

module.exports = router;
