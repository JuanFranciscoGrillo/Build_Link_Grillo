// controllers/api/applicationRoutes.js
const router = require('express').Router();
const {Application} = require('../../models');

// POST - Create a new application
router.post('/', async (req, res) => {
  try {
    const newApplication = await Application.create(req.body);
    res.status(200).json(newApplication);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET - Retrieve all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.findAll();
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET - Retrieve a single application by ID
router.get('/:id', async (req, res) => {
  try {
    const application = await Application.findByPk(req.params.id);
    if (!application) {
      res.status(404).json({message: 'No application found with this id!'});
      return;
    }
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT - Update an application
router.put('/:id', async (req, res) => {
  try {
    const updatedApplication = await Application.update(req.body, {
      where: {id: req.params.id},
    });
    if (!updatedApplication[0]) {
      res.status(404).json({message: 'No application found with this id!'});
      return;
    }
    res.status(200).json(updatedApplication);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE - Delete an application
router.delete('/:id', async (req, res) => {
  try {
    const application = await Application.destroy({
      where: {id: req.params.id},
    });
    if (!application) {
      res.status(404).json({message: 'No application found with this id!'});
      return;
    }
    res.status(200).json({message: 'Application deleted!'});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
