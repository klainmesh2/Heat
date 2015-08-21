var express = require('express');
var router = express.Router();
// require mongoose and material model //
var mongoose = require('mongoose');
var Material = mongoose.model('Material');
// get all lists of materials //
router.get('/', function (req, res, next) {
  Material.find(function (err, materials) {
    // error on db //
    if(err) {return next(err);}
    // if there are no materials found //
    if(!materials) {return next(new Error('Can\'t find any materials'));}
    // respond with json data //
    res.json(materials);
  });
});
// post/save data to materials
router.post('/', function (req, res, next) {

  console.log(req.body);

  var materialArray = {
    walls: []
  };

  materialArray.walls.push(req.body);

  var material = new Material(JSON.stringify(materialArray));

  console.log(materialArray);

  material.save(function (err, material) {
    if(err) {return next(err);}
    res.json(material);
  });
});
// export router //
module.exports = router;