const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const childSchema = new Schema({
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

module.exports = Child;