var express = require("express");
var router = express.Router();
var User = require('../../../models').User;

router.get("/", function(req, res, next) {
  var apiKey = req.body.api_key
  if (apiKey === undefined) {
    res.status(401).send(JSON.stringify('Unauthorized'));
  }
  var user = User.findOne({ where: {api_key: apiKey}})
  .then(user => {

  })
  .catch(error => {
    res.status(401).send(JSON.stringify('Unauthorized'));
  })
});

module.exports = router;



//  Is the catch error okay as a 401 ? That way if invalid api_key it returns 401.
