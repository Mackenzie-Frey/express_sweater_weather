var express = require("express");
var router = express.Router();
var User = require('../../../models').User;
pry = require('pryjs');

router.post("/", function(req, res, next) {
  var location = req.body.location;
  var api_key = req.body.api_key;
  return User.findOne({ where: {api_key: req.body.api_key}})
    .then(user => {
      eval(pry.it);
      
      // user.favorites_cities.update(city: location)

      // Resolve that promise
      // user.favorites_cities["city"] = location
    })
  .catch(error => {
    res.status(500).send({ error })
  })
});

module.exports = router;
