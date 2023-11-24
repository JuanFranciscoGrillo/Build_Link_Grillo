const express = require('express');
const {Post} = require('../models');
const router = express.Router();

// Create a new job post - POST /api/posts
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      salary: req.body.salary,
      company: req.body.company,
      userId: req.body.userId, // Assuming this comes from session or token
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({message: 'Error creating post', error: err});
  }
});

// Get all job posts - GET /api/posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({message: 'Error retrieving posts', error: err});
  }
});

// Get a single job post - GET /api/posts/:id
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      res.status(404).json({message: 'No post found with this id'});
      return;
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({message: 'Error retrieving post', error: err});
  }
});

// Update a job post - PUT /api/posts/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.update(
        req.body,
        {where: {id: req.params.id}},
    );
    if (!updatedPost[0]) {
      res.status(404).json({message: 'No post found with this id'});
      return;
    }
    res.status(200).json({message: 'Post updated successfully'});
  } catch (err) {
    res.status(500).json({message: 'Error updating post', error: err});
  }
});

// Delete a job post - DELETE /api/posts/:id
router.delete('/:id', async (req, res) => {
  try {
    const result = await Post.destroy({
      where: {id: req.params.id},
    });
    if (!result) {
      res.status(404).json({message: 'No post found with this id'});
      return;
    }
    res.status(200).json({message: 'Post deleted successfully'});
  } catch (err) {
    res.status(500).json({message: 'Error deleting post', error: err});
  }
});

module.exports = router;
