const {
  user,
  task
} = require('../validations/schemas');

exports.validationSchemas = {
  ...user,
  ...task,
}
