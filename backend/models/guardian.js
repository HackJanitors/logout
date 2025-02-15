import { Schema, model } from 'mongoose';

const guardianSchema = new Schema({
  username: String,
  walletId: String,
});
const Guardian = model('Guardian', guardianSchema);

export default Guardian;