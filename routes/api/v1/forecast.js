var express = require("express");
var router = express.Router();
var User = require('../../../models').User;
var fetch = require("node-fetch");
require('dotenv').config();
pry = require('pryjs');


router.get("/", function(req, res, next) {
  var address = req.query.location
  User.findOne({ where: {api_key: req.body.api_key}})
  .then(user => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.google_key}`)
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    res.send(JSON.stringify(myJson));
  })
  .catch(error => {
    res.status(401).send(JSON.stringify('Unauthorized'));
  })
});

module.exports = router;

// Do I really need the user arrow function?

//  Is the catch error okay as a 401 ? That way if invalid api_key it returns 401.

// if (apiKey === undefined) {
//   res.status(401).send(JSON.stringify('Unauthorized'));
// }


// NOT CURRENTLY SETUP FOR INCORRECT API KEYS NOT WORKING
