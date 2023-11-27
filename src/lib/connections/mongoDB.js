const mongoose = require('mongoose');
const { MONGO_DB, MONGO_HOST, MONGO_USER, MONGO_PASSWORD } =
  require('../configs').mongoConfig;

module.exports.connectMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
    );
    console.log('Connection established with MongoDB.')
    return;
  } catch (error) {
    throw error;
  }
};
