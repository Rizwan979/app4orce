// @Dependencies
const { v4: uuid } = require('uuid');

// @Models
const TaskModel = require('../../models/mongodb/Task.model');


// @Helper Functions
const {
  successResponse,
  errorResponse,
} = require('../../utils/helperFunctions');

const task = {};

task.create = async (req, res, next) => {
  let {title, description, dueDate, status} = req.body;
  const { userID } = res.auth;

  try {
    const taskDto = {
      taskID: `task-${uuid()}`,
      title,
      description,
      dueDate,
      status
    };
    const task = new TaskModel(taskDto);
    await task.save();

return successResponse({
        res,
        code: 200,
        message: 'Task created succeed.',
        data: {},
      });
  } catch (e) {
    next(e);
  }
};
task.update = async (req, res, next) => {
  let {taskID, title, description, dueDate, status} = req.body;
  const { userID } = res.auth;

  try {
    const taskDto = {
      title,
      description,
      dueDate,
      status
    };
    const task = new TaskModel(taskDto);
    await task.updateOne({taskID}, {$set: taskDto});

return successResponse({
        res,
        code: 200,
        message: 'Task updated succeed.',
        data: {},
      });
  } catch (e) {
    next(e);
  }
};
task.remove = async (req, res, next) => {
  let { taskID } = req.query;
  const { userID } = res.auth;

  try {
    
    const task = new TaskModel();
    await task.deleteOne({ taskID });

return successResponse({
        res,
        code: 200,
        message: 'Task deleted succeed.',
        data: {},
      });
  } catch (e) {
    next(e);
  }
};
task.get = async (req, res, next) => {
  let { taskID } = req.query;
  const { userID } = res.auth;

  try {

return successResponse({
        res,
        code: 200,
        message: 'Task get succeed.',
        data: await TaskModel.findOne({ taskID })
      });
  } catch (e) {
    next(e);
  }
};
task.assigneTask = async (req, res, next) => {
  let { taskID, userId } = req.body;
  const { userID } = res.auth;

  try {

    await TaskModel.updateOne({taskID}, {$set: {userID: userId}});

return successResponse({
        res,
        code: 200,
        message: 'Task assigned succeed.',
        data: {},
      });
  } catch (e) {
    next(e);
  }
};
task.getAll = async (req, res, next) => {
  let { pageNo } = req.query;
  const { userID } = res.auth;

  try {
     const limit = 5;
    const result = await TaskModel.find()
    .skip((pageNo - 1) * limit)
    .limit(parseInt(limit));

return successResponse({
        res,
        code: 200,
        message: 'Get all tasks succeed.',
        data: result,
      });
  } catch (e) {
    next(e);
  }
};

module.exports = task;
