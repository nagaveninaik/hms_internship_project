const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
 
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
  role: {
    type: String,
    required: true,
  },


});

const employee = mongoose.model('employee', EmployeeSchema);
module.exports = employee;