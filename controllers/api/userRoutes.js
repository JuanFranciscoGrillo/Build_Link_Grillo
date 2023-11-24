const router = require('express').Router();
const {User} = require('../../models');

// POST - Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET - Retrieve all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET - Retrieve a single user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({message: 'No user found with this id!'});
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT - Update a user
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: {id: req.params.id},
    });
    if (!updatedUser[0]) {
      res.status(404).json({message: 'No user found with this id!'});
      return;
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE - Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.destroy({
      where: {id: req.params.id},
    });
    if (!user) {
      res.status(404).json({message: 'No user found with this id!'});
      return;
    }
    res.status(200).json({message: 'User deleted!'});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
