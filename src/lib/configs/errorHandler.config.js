const { errorCode, responseCode } = require('../../constants');
const {
  SERVER_SIDE_ERROR,
  INVALID_ROUTE,
  INVALID_METHOD,
  ER_DUP_ENTRY,
  DB_OPERATION_FAILED,
  INTERNAL_AUTHENTICATION_ERROR,
  AUTHENTICATION_TOKEN_NOT_FOUND,
  AUTHORIZATION_ERROR,
  VALIDATION_ERROR,
  DATA_NOT_FOUND,
  INVALID_PASSWORD,
  INVALID_EMAIL,
} = errorCode;

const {
  SERVER_CRASHED,
  INVALID_CREDENTIAL,
  NOT_EXIST,
  BAD_REQUEST,
  AUTHENTICATION_FAILED,
  AUTHORIZATION_FAILED,
} = responseCode;

exports.errorHandlerConfig = {
  [SERVER_SIDE_ERROR]: {
    message: 'Server Side Error',
    code: SERVER_CRASHED,
  },

  [INVALID_ROUTE]: {
    message: 'Request route is not defined properly',
    code: BAD_REQUEST,
  },

  [INVALID_METHOD]: {
    message: 'Request method is not defined properly',
    code: BAD_REQUEST,
  },

  [VALIDATION_ERROR]: {
    message: 'Validation error',
    code: BAD_REQUEST,
  },

  [ER_DUP_ENTRY]: {
    message: 'Record already exist',
    code: BAD_REQUEST,
  },

  [DB_OPERATION_FAILED]: {
    message: 'Something went wrong',
    code: BAD_REQUEST,
  },

  [INTERNAL_AUTHENTICATION_ERROR]: {
    message: 'Authentication Failed',
    code: AUTHENTICATION_FAILED,
  },

  [AUTHENTICATION_TOKEN_NOT_FOUND]: {
    message: 'Authentication token not found',
    code: AUTHENTICATION_FAILED,
  },

  [AUTHORIZATION_ERROR]: {
    message: 'Authorization failed',
    code: AUTHORIZATION_FAILED,
  },
  [DATA_NOT_FOUND]: {
    message: 'Data not found',
    code: NOT_EXIST,
  },
  [INVALID_EMAIL]: {
    message: 'Invalid Email address!',
    code: INVALID_CREDENTIAL,
  },
  [INVALID_PASSWORD]: {
    message: 'Invalid Password!',
    code: INVALID_CREDENTIAL,
  },
};
