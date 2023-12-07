const router = require('express').Router();
const { Application } = require('../../models');

// Error handling middleware
const handleErrors = (res, err) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
};

// POST - Create a new application
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      res.status(400).json({ error: 'Name and description are required' });
      return;
    }

    const newApplication = await Application.create({ name, description });
    res.status(201).json(newApplication);
  } catch (err) {
    handleErrors(res, err);
  }
});

// GET - Retrieve all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.findAll();
    res.status(200).json(applications);
  } catch (err) {
    handleErrors(res, err);
  }
});

// GET - Retrieve a single application by ID
router.get('/:id', async (req, res) => {
  try {
    const application = await Application.findByPk(req.params.id);
    if (!application) {
      res.status(404).json({ error: 'No application found with this id' });
      return;
    }
    res.status(200).json(application);
  } catch (err) {
    handleErrors(res, err);
  }
});

// PUT - Update an application
router.put('/:id', async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      res.status(400).json({ error: 'Name and description are required' });
      return;
    }

    const [updatedCount] = await Application.update(
      { name, description },
      { where: { id: req.params.id } }
    );

    if (updatedCount === 0) {
      res.status(404).json({ error: 'No application found with this id' });
      return;
    }

    res.status(200).json({ message: 'Application updated' });
  } catch (err) {
    handleErrors(res, err);
  }
});

// DELETE - Delete an application
router.delete('/:id', async (req, res) => {
  try {
    const deletedCount = await Application.destroy({
      where: { id: req.params.id },
    });

    if (deletedCount === 0) {
      res.status(404).json({ error: 'No application found with this id' });
      return;
    }

    res.status(200).json({ message: 'Application deleted' });
  } catch (err) {
    handleErrors(res, err);
  }
});

module.exports = router;