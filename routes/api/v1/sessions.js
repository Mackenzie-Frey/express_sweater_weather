var express = require("express");
var router = express.Router();
var User = require('../../../models').User;
const bcrypt = require('bcrypt');

router.post("/", function(req, res, next) {
  var user = User.findOne({ where: {email: req.body.email} })
  .then(user => {
    if (bcrypt.compareSync(req.body.password, user.passwordDigest)) {
      res.status(200).send(customizeJson(user))
    } else {
        res.status(401).send(JSON.stringify('Unauthorized'));
    }
  })
  .catch(error => {
    res.status(500).send({ error });
  })
});

function customizeJson(user) {
  return {"api_key": user.api_key};
}

module.exports = router;

// if (user === undefined) {
    // res.status(401).send(JSON.stringify('Unauthorized'));
  // }

  // Need another catch statement?
