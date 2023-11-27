const { authentication } = require('./authentication.middleware');
const { authorization } = require('./authorization.middleware');
const { dataLogger } = require('./dataLogger.middleware');
const { errorLogger } = require('./errorLogger.middleware');
const { requestValidator } = require('./requestValidator.middleware');
const { errorHandler } = require('./errorHandler.middleware');

module.exports = {
    authentication,
    authorization,
    dataLogger,
    errorLogger,
    requestValidator,
    errorHandler,
};
