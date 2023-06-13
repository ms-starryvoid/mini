const express = require('express');
const { fetchPatientByName } = require('../controllers/dataFetching');
const userRouter = express.Router();

// Assuming you have a function to fetch patient details by name


// Route for fetching patient details by name
userRouter.get('/asha/:name', async (req, res) => {
  const name = req.params.name;

  try {
    const patient = await fetchPatientByName(name);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.json(patient);
  } catch (error) {
    console.error('Error fetching patient details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = viewashaRouter;
