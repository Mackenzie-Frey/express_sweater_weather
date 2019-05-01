var express = require("express");
var crypto = require("crypto");
var router = express.Router();
var User = require('../../../models').User;
const bcrypt = require('bcrypt');
pry = require('pryjs');

router.post("/", function(req, res, next) {
  var user = User.find_by(req.body.email)
  // if (user.exists? === false) {
      // res.status(401).send(JSON.stringify('Unauthorized'));
    // }
  if (decryptPasswordDigest(user) === req.body.password) {
    res.status(200).send(customizeJson(user))
    //  catch statement
  } else {
      res.status(401).send(JSON.stringify('Unauthorized'));
  }
  eval(pry.it);
});

function decryptPasswordDigest(user) {
  var password = user.passwordDigest()
  return /* bcrypt thing to decrypt password */
}

function customizeJson(user) {
  return {"api_key": user.api_key};
}

module.exports = router;
