const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    height: Number,
    weight: Number,
    bloodSugar: Number,
    heartRate: Number,
    bloodPressure: String,
    chest: Number,
    waist: Number,
    hip: Number,
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
