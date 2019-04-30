var express = require("express");
var crypto = require("crypto");
var router = express.Router();
var User = require('../../../models').User;
var apiKey = crypto.randomBytes(20).toString('hex');

router.post("/", function(req, res, next) {
  User.create({
    email: req.body.email,
    passwordDigest: passwordHelper,
    api_key: apiKey
  })
});


// passwordDigest helper method
