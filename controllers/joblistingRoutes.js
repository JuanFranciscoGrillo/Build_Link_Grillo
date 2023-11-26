const express = require('express');
const router = express.Router();

router.get('/joblisting', (req, res) => {
  res.render('joblisting');
});

module.exports = router;
