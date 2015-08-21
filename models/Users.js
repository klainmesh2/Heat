var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email           : {
      type          :String
    , unique        :true
    }
  , company_name    : String
  , title           : String
  , first_name      : String
  , surname         : String
  , address         : String
  , post_code       : String
  , office_telephone: String
  , mobile          : String
  , username        : {
      type          :String
    , unique        :true
    }
  , password        : String
  , role            : String
  , verify          : false
});

// TODO Create methods for user authentication

// TODO Compare password and confirm password

// TODO User should encrypt the password

// TODO Use passport for authentication

mongoose.model('User', UserSchema);