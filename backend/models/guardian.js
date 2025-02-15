import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const guardianSchema = new Schema({
  id: String,
  username: String,
  walletId: String,
  childId: String,
});
const Guardian = model('Guardian', guardianSchema);
export default Guardian;