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

module.exports = User;// controllers/user.controller.js
const User = require('../models/user.model'); 

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// This is the correct way to export if you're using module.exports
module.exports = {
  createUser
};//