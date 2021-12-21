const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientAdmissionSchema = new Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Patient'
  },
  ward_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Ward'
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Employee'
  },
  admission_date: {
    type: String,
    required: true,
  },
  discharge_date: {
    type: String,
    required: true,
  },
  bill_amt: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  
  


});

const Admission = mongoose.model('Admission', PatientAdmissionSchema);
module.exports = Admission;