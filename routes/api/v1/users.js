var express = require("express");
var crypto = require("crypto");
var router = express.Router();
var User = require('../../../models').User;
var apiKey = crypto.randomBytes(20).toString('hex');
const bcrypt = require('bcrypt');
const saltRounds = 10;
pry = require('pryjs');

router.post("/", function(req, res, next) {
  if (req.body.password === req.body.password_confirmation) {
    User.create({
      email: req.body.email,
      passwordDigest: encryptPassword(req.body.password),
      api_key: apiKey
    })
    .then(user => {
      res.status(201).send(customizeJson(user));
    })
    .catch(error => {
      res.status(500).send({ error });
    });
  } else {
      res.status(400).send(JSON.stringify('Bad Request - The password and password confirmation do not match.'));
    }
});

function customizeJson(user) {
  return {"api_key": user.api_key};
}

function encryptPassword(plainTextPassword) {
    return bcrypt.hashSync(plainTextPassword, saltRounds);
}

module.exports = router;
