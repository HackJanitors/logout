
import { Schema, model } from 'mongoose';

const guardianSchema = new Schema({
  username: String,
  walletId: String,
  childId: String,
  keyId: String
});
const Guardian = model('Guardian', guardianSchema);

export default Guardian
