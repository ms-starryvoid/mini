const ashaModel = require("../models/ashaModel");

// Assuming you have the necessary imports and database setup
const fetchPatientByName = async (name) => {
    try {
      const patient = await ashaModel.findOne({ name: name }).exec();
      return patient;
    } catch (error) {
      console.error('Error fetching patient details:', error);
      throw new Error('Failed to fetch patient details');
    }
  };
  
  module.exports = { fetchPatientByName };
  