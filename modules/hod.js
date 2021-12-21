const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HODdetailsSchema = new Schema({
  hod_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Employee'
  },
  dept_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Department'
  },
  start_date: {
    type: String,
    required: true,
  },
  


});

const HODdetails = mongoose.model('HODdetails', HODdetailsSchema);
module.exports = HODdetails;