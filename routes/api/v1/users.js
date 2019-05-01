var express = require("express");
var crypto = require("crypto");
var router = express.Router();
var User = require('../../../models').User;
var apiKey = crypto.randomBytes(20).toString('hex');
pry = require('pryjs');

router.post("/", function(req, res, next) {
  eval(pry.it);
  if (req.body.password == req.body.password_confirmation) {
    // res.status(201).send(JSON.stringify(apiKey));
    User.create({
      email: req.body.email,
      passwordDigest: "passwordHelper",
      api_key: apiKey
    })
    .then(user => {
      res.status(201).send(JSON.stringify(user.api_key));
    })
    .catch(error => {
      res.status(500).send({ error });
    });

  } else {
      res.status(401).send(JSON.stringify('sorry'));
    }

});

module.exports = router;




// var express = require("express");
// var crypto = require("crypto");
// var router = express.Router();
// var User = require('../../../models').User;
// var apiKey = crypto.randomBytes(20).toString('hex');
// pry = require('pryjs');
//
// router.post("/", function(req, res, next) {
//   eval(pry.it);
//   if (req.body.password == req.body.password_confirmation) {
//     return User.create({
//       email: req.body.email,
//       passwordDigest: passwordHelper,
//       api_key: apiKey
//     })
//     .then(user => {
//       res.status(201).send(JSON.stringify(user.api_key));
//     })
//   }
//     else {
//       return User.create({
//         email: req.body.email,
//         passwordDigest: passwordHelper,
//         api_key: apiKey
//       })
//     }
//
//   .catch(error => {
//     res.status(500).send({ error });
//   });
// });
//
// module.exports = router;
