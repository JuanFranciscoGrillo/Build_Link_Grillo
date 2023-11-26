const express = require('express');
const router = express.Router();

// Importing route files for web pages
const homeRoutes = require('./homeRoutes');
const aboutRoutes = require('./aboutRoutes');
const contactRoutes = require('./contactRoutes');
const editPostRoutes = require('./editPostRoutes');
const joblistingRoutes = require('./joblistingRoutes');
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');
const profileRoutes = require('./profileRoutes');
const searchResultsRoutes = require('./searchResultsRoutes');

// Importing the 'api' routes
const apiRoutes = require('./api');

// Using the imported routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes); // For API routes
router.use(aboutRoutes);
router.use(contactRoutes);
router.use(editPostRoutes);
router.use(joblistingRoutes);
router.use(loginRoutes);
router.use(postRoutes);
router.use(profileRoutes);
router.use(searchResultsRoutes);

module.exports = router;
