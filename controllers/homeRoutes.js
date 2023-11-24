const express = require('express');
const router = express.Router();

// GET - Home Page
router.get('/', (req, res) => {
  res.render('home'); // You can use res.sendFile() or res.json() if you're serving different content
});

module.exports = router;
