const { successResponse, returnSuccess } = require('./success');
const { errorDB, errorResponse, returnError } = require('./error');
const { jwtManager } = require('./jwtManager');
module.exports = {
  successResponse,
  returnSuccess,
  errorDB,
  errorResponse,
  returnError,
  jwtManager,
};
