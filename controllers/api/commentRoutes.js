const router = require('express').Router();
const {Comment} = require('../../models');

// POST - Create a new comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET - Retrieve all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET - Retrieve a single comment by ID
router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      res.status(404).json({message: 'No comment found with this id!'});
      return;
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT - Update a comment
router.put('/:id', async (req, res) => {
  try {
    const updatedComment = await Comment.update(req.body, {
      where: {id: req.params.id},
    });
    if (!updatedComment[0]) {
      res.status(404).json({message: 'No comment found with this id!'});
      return;
    }
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE - Delete a comment
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.destroy({
      where: {id: req.params.id},
    });
    if (!comment) {
      res.status(404).json({message: 'No comment found with this id!'});
      return;
    }
    res.status(200).json({message: 'Comment deleted!'});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
