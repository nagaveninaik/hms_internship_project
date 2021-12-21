const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  
  dept_name: {
    type: String,
    required: true,
  },
  start_date: {
    type: String,
    required: true,
  },
  


});

const Department = mongoose.model('Department', DepartmentSchema);
module.exports = Department;