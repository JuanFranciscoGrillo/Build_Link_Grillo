const router = require('express').Router();
const {Message} = require('../../models');

// POST - Create a new message
router.post('/', async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(200).json(newMessage);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET - Retrieve all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET - Retrieve a single message by ID
router.get('/:id', async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) {
      res.status(404).json({message: 'No message found with this id!'});
      return;
    }
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT - Update a message
router.put('/:id', async (req, res) => {
  try {
    const updatedMessage = await Message.update(req.body, {
      where: {id: req.params.id},
    });
    if (!updatedMessage[0]) {
      res.status(404).json({message: 'No message found with this id!'});
      return;
    }
    res.status(200).json(updatedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE - Delete a message
router.delete('/:id', async (req, res) => {
  try {
    const message = await Message.destroy({
      where: {id: req.params.id},
    });
    if (!message) {
      res.status(404).json({message: 'No message found with this id!'});
      return;
    }
    res.status(200).json({message: 'Message deleted!'});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
