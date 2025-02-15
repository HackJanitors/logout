import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const childSchema = new Schema({
    id: String,
    username: String,
    guardianId: String,
    riotId: String,
    walletId: String,
    goal: Number,
    dailyRate: Number,
    weeklyRate: Number,
    monthlyRate: Number
});

const Child = model('Child', childSchema);
export default Child;