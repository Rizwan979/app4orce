const { mongoConfig } = require('./mongo.config');
const { errorLoggerConfig } = require('./errorLogger.config');
const { errorHandlerConfig } = require('./errorHandler.config');
const { routesConfig } = require('./route.config');

module.exports = {
  mongoConfig,
  errorLoggerConfig,
  routesConfig,
  errorHandlerConfig
};
