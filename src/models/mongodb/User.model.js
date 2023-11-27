const { User: UserSchema } = require('../../schemas/mongoDB/user.schema');

// @Helper Functions
const {
  returnSuccess,
  errorDB,
  returnError,
} = require('../../utils/helperFunctions');

class User extends UserSchema {

}

module.exports = User;
