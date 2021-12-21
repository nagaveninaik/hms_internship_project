const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WardSchema = new Schema({
 
  ward_name: {
    type: String,
    required: true,
  },
  ward_location: {
    type: String,
    required: true,
  },
  ward_status: {
    type: String,
    required: true,
  },
  ward_type: {
    type: String,
    required: true,
  },
  ward_capacity: {
    type: String,
    required: true,
  },
});

const Ward = mongoose.model('Ward', WardSchema);
module.exports = Ward;