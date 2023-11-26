const express = require('express');
const router = express.Router();

router.get('/search-results', (req, res) => {
  res.render('search-results');
});

module.exports = router;
