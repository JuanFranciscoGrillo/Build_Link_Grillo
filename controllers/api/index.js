const express = require('express');
const router = express.Router();

// Import individual route files
const applicationRoutes = require('./applicationRoutes');
const commentRoutes = require('./commentRoutes');
const messageRoutes = require('./messageRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

// Use the imported routes
router.use('/applications', applicationRoutes);
router.use('/comments', commentRoutes);
router.use('/messages', messageRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;
