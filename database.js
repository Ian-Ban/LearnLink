const mongoose = require('mongoose');

// Define the schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true }); // This second object adds createdAt and updatedAt fields

// Create the model from the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;// controllers/