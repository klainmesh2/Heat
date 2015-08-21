var mongoose = require('mongoose');

var MaterialSchema = new mongoose.Schema({
    walls         : []
  , floors        : []
  , windows_doors : []
  , roof          : []
});

mongoose.model('Material', MaterialSchema);