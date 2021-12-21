const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },
  ph_no: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  
  blood_group: {
    type: String,
    required: true,
  },
  


});

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;