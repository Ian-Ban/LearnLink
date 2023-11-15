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
};