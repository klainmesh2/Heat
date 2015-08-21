var mongoose = require('mongoose');

var SurveyorSchema = new mongoose.Schema({
  _user_id        : {
      type        : String
    , unique      : true
  }
  , email         : {
      type        : String
    , unique      : true
  }
  , company_name  : String
  , first_name    : String
  , surname       : String
  , password      : String
  , is_invited    : false
  , verify        : false
});

mongoose.model('Surveyor', SurveyorSchema);