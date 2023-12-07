const express = require('express');
const router = express.Router();

// Importing other route files
const homeRoutes = require('../homeRoutes');
// Assuming 'api' directory contains your API routes
const apiRoutes = require('../api');

// Use the imported routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Export the router
module.exports = router;
