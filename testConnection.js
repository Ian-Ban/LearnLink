const mongoose = require('mongoose');

const mongoDBUrl = 'mongodb://localhost:27017/LearnLink';

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));


db.once('open', function() {
  // we're connected!
  console.log('Connected to MongoDB');
});
