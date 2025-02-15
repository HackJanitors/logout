import { Schema, model } from 'mongoose';

const daySchema = new Schema({
    childId: String,
    date: Date,
    hours: Number,
    dailyPayment: Boolean,
    weeklyPayment: Boolean,
    monthlyPayment: Boolean
})

const Day = model('Day', daySchema);

export default Day;