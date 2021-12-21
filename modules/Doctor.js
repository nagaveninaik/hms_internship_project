const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },
  ph_no: {
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
  email: {
    type: String,
    required: true,
  },
  joining_date: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  speciallization: {
    type: String,
    required: true,
  },
  experience:{
    type: String,
    required:true,
  },
  dept_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Department'
  },
  


});

const Doctor = mongoose.model('Doctor', DoctorSchema);
module.exports = Doctor;