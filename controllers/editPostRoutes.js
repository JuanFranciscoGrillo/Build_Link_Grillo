const express = require('express');
const router = express.Router();

router.get('/edit-post', (req, res) => {
  res.render('edit-post');
});

module.exports = router;
