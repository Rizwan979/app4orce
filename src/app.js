// @Dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//@Middlewares
const {
    dataLogger,
    errorLogger,
    requestValidator,
    errorHandler,
  } = require('./middlewares');

// Import mongo connection
const { connectMongoDB } = require('./lib/connections/mongoDB');

// Import-Routes
const router = require('./routes')
const { randomConstant } = require('./constants/random.constant');
const { PORT } = randomConstant;

// Init Server
const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(requestValidator)
app.use(dataLogger);

// Routes
app.use('/api/app4orce', router)

// Error Logger
app.use(errorLogger);

// Error Handler
app.use(errorHandler);

// Start Server
// @Establish Connection with Persistance && Start Server
(async (server) => {
    try {
      await connectMongoDB();
  
      server.listen(PORT, console.log('server started @', new Date(), '\nOn Port ::: ', PORT));
  
    } catch (error) {
      console.log('Error occured while creating connections with persistance ::: ', error);
    }
  })(app)
