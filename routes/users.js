var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

// Test user signup api //
// TODO I will make this one use Passport just doing several test on mongodb
router.post('/signup', function (req, res, next) {
  console.log(JSON.stringify(req.body));
  var user = new User(req.body);

  user.save(function (err, user) {
    if(err) {return next(err);}
    res.json(user);
  });
});

module.exports = router;