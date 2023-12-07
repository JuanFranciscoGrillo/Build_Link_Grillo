const router = require('express').Router();
const { Post } = require('../../models');

// POST - Create a new post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET - Retrieve all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET - Retrieve a single post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT - Update a post
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updatedPost[0]) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE - Delete a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.destroy({
      where: { id: req.params.id },
    });
    if (!post) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Post deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
