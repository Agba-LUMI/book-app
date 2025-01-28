const mongoose = require('mongoose');
// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    max: 40,
    required: true
    }, 
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true
    },
  username: {
    type: String,
    unique: true,
    max: 20,
    min: 3
},
  age: Number,
  isAdult: Boolean, 
  gender: { type: String },
  jobDescription: { type: String, default: Date.now }
}, { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt"}});

const User = mongoose.model('User', userSchema);

module.exports = User;