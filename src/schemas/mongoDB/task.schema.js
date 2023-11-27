const { Schema, model } = require('mongoose');

exports.Task = model('task', new Schema(
  {
    // _id: false,
    taskID: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: String,
    },
    status: {
      type: String,
      default: 'pending',
    }
  
  }, { timestamps: true }));