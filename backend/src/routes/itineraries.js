const { body, validationResult } = require('express-validator');

router.post('/', [
  body('title').notEmpty().withMessage('Title is required'),
  body('startDate').isISO8601().toDate().withMessage('Invalid start date'),
  body('endDate').isISO8601().toDate().withMessage('Invalid end date'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const express = require('express');
const router = express.Router();
const Itinerary = require('../models/Itinerary');

// Create
router.post('/', async (req, res) => {
  try {
    const itinerary = await Itinerary.create(req.body);
    res.status(201).json(itinerary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
router.get('/', async (req, res) => {
  try {
    const itineraries = await Itinerary.findAll();
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read one
router.get('/:id', async (req, res) => {
  try {
    const itinerary = await Itinerary.findByPk(req.params.id);
    if (itinerary) {
      res.json(itinerary);
    } else {
      res.status(404).json({ message: 'Itinerary not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Itinerary.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedItinerary = await Itinerary.findByPk(req.params.id);
      res.json(updatedItinerary);
    } else {
      res.status(404).json({ message: 'Itinerary not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Itinerary.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Itinerary deleted' });
    } else {
      res.status(404).json({ message: 'Itinerary not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
});
