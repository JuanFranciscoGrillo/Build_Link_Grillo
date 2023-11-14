const express = require('express');
const { Application } = require('../models');
const router = express.Router();

// Create a new application - POST /api/applications
router.post('/', async (req, res) => {
  try {
    const newApplication = await Application.create({
      userId: req.body.userId,
      postId: req.body.postId,
      coverLetter: req.body.coverLetter,
      resume: req.body.resume,
      status: 'pending'  // default status
    });
    res.status(201).json(newApplication);
  } catch (err) {
    res.status(400).json({ message: 'Error creating application', error: err });
  }
});

// Get all applications for a post - GET /api/applications/post/:postId
router.get('/post/:postId', async (req, res) => {
  try {
    const applications = await Application.findAll({
      where: { postId: req.params.postId }
    });
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving applications', error: err });
  }
});

// Update an application - PUT /api/applications/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedApplication = await Application.update(
      req.body, 
      { where: { id: req.params.id } }
    );
    if (!updatedApplication[0]) {
      res.status(404).json({ message: 'No application found with this id' });
      return;
    }
    res.status(200).json({ message: 'Application updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating application', error: err });
  }
});

// Delete an application - DELETE /api/applications/:id
router.delete('/:id', async (req, res) => {
  try {
    const result = await Application.destroy({
      where: { id: req.params.id }
    });
    if (!result) {
      res.status(404).json({ message: 'No application found with this id' });
      return;
    }
    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting application', error: err });
  }
});

module.exports = router;
