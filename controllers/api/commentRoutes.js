const express = require('express');
const { Comment } = require('../models');
const router = express.Router();

// Create a new comment - POST /api/comments
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      text: req.body.text,
      userId: req.body.userId,  // Assumed to be provided, e.g., from session
      postId: req.body.postId
    });
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: 'Error creating comment', error: err });
  }
});

// Get all comments - GET /api/comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving comments', error: err });
  }
});

// Get comments by postId - GET /api/comments/post/:postId
router.get('/post/:postId', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { postId: req.params.postId }
    });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving comments for the post', error: err });
  }
});

// Update a comment - PUT /api/comments/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      { text: req.body.text },
      { where: { id: req.params.id } }
    );
    if (!updatedComment[0]) {
      res.status(404).json({ message: 'No comment found with this id' });
      return;
    }
    res.status(200).json({ message: 'Comment updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating comment', error: err });
  }
});

// Delete a comment - DELETE /api/comments/:id
router.delete('/:id', async (req, res) => {
  try {
    const result = await Comment.destroy({
      where: { id: req.params.id }
    });
    if (!result) {
      res.status(404).json({ message: 'No comment found with this id' });
      return;
    }
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting comment', error: err });
  }
});

module.exports = router;
