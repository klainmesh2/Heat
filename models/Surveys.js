var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
    _user_id          : {
        type          : String
      , unique        : true
    }
  , project_reference : String
  , post_code         : String
  , address           : String
  , surveyor          : String
  , date              : String
  , is_archived       : false
});

mongoose.model('Survey', SurveySchema);