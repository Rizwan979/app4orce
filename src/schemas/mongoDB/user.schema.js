const { Schema, model } = require('mongoose');

exports.User = model('user', new Schema(
  {
    // _id: false,
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  
  }, { timestamps: true }));