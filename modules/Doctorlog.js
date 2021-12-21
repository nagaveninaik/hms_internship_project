const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorlogSchema = new Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'
  },
  


});

const Doctorlog = mongoose.model('Doctorlog', DoctorlogSchema);
module.exports = Doctorlog;