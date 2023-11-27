const { Task: TaskSchema } = require('../../schemas/mongoDB/task.schema');

// @Helper Functions
const {
  returnSuccess,
  errorDB,
  returnError,
} = require('../../utils/helperFunctions');

class Task extends TaskSchema {

}

module.exports = Task;
