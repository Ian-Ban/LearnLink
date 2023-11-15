// database.js
const mongoose = require('mongoose');

const mongoDBUrl = 'mongodb://localhost:27017/LearnLink';

const initializeDatabase = async () => {
  try {
    await mongoose.connect(mongoDBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = initializeDatabase;
