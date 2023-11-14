const express = require('express');
const { User } = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt'); // For password hashing

// Register a new user - POST /api/users
router.post('/', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: 'Error registering user', error: err });
  }
});

// User login - POST /api/users/login
// This is a placeholder. Actual implementation will vary based on your authentication strategy.
router.post('/login', async (req, res) => {
  try {
    // Authentication logic goes here
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error logging in', error: err });
  }
});

// Get user profile - GET /api/users/:id
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving user data', error: err });
  }
});

// Update user profile - PUT /api/users/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updatedUser[0]) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err });
  }
});

// Delete a user - DELETE /api/users/:id
router.delete('/:id', async (req, res) => {
  try {
    const result = await User.destroy({
      where: { id: req.params.id }
    });
    if (!result) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err });
  }
});

module.exports = router;
