const express = require('express');
const router = express.Router();

// GET - Home Page
router.get('/', (req, res) => {
  res.render('homepage'); // Updated to render 'homepage' instead of 'home'
});

module.exports = router;
