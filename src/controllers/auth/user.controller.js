// @Dependencies
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');

// @Models
const UserModel = require('../../models/mongodb/User.model');

// @Helper Functions
const {
  jwtManager: {
    generateToken
  },
  successResponse,
  errorResponse,
} = require('../../utils/helperFunctions');

// @Constants
const { 
  errorCode: {
      USER_NOT_FOUND,
      INVALID_CREDENTIALS
  } 
} = require('../../constants');

const user = {};

user.signUp = async (req, res, next) => {
  let { name, email, password } = req.body;

    email = email.toLowerCase();
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
  try {
    const userData = {
      userID: `user-${uuid()}`,
      name,
      email,
      password: passwordHash,
    };
    const user = new UserModel(userData);
    await user.save();

    return successResponse({
      res,
      code: 200,
      message: 'Sign Up succeed.',
      data: name,
    });
  } catch (e) {
    next(e);
  }
};
user.signIn = async (req, res, next) => {
  let { email, password } = req.body;

  try {

    let data   = await UserModel.findOne({ email });
        if(!data) throw errorResponse(USER_NOT_FOUND);
        
        const isMatch = await bcrypt.compare(password, data.password);
        if(!isMatch) throw errorResponse(INVALID_CREDENTIALS);

        const jwtDTO = {
            id: data.userID
        }
        const token = await generateToken(jwtDTO);
        delete data.password;


      return successResponse({
        res,
        code: 200,
        message: 'JWT token created',
        data: {
            token
        },
      });
  } catch (e) {
    next(e);
  }
};


module.exports = user;
