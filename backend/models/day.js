const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const daySchema = new Schema({
    id: String,
    childId: String,
    date: Date,
    hours: Number,
    dailyPayment: Boolean,
    weeklyPayment: Boolean,
    monthlyPayment: Boolean
})

const Day = model('Day', daySchema);

module.exports = Day;