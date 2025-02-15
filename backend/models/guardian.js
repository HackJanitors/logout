const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const guardianSchema = new Schema({
  username: String,
  walletId: String,
  childId: String,
});
const Guardian = model('Guardian', guardianSchema);

module.exports = Guardian;