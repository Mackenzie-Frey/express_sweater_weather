var express = require("express");
var router = express.Router();
var User = require('../../../models').User;
pry = require('pryjs');


router.get("/", function(req, res, next) {
  var apiKey = req.body.api_key
  // if (apiKey === undefined) {
  //   res.status(401).send(JSON.stringify('Unauthorized'));
  // }
  var user = User.findOne({ where: {api_key: apiKey}})
  .then(user => {
    eval(pry.it);

    // Send to geocoding api
    req.query.location

  })
  // .catch(error => {
  //   res.status(401).send(JSON.stringify('Unauthorized'));
  // })
});

module.exports = router;



//  Is the catch error okay as a 401 ? That way if invalid api_key it returns 401.
