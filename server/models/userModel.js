const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "please type a valid email"],
    },
    password: {
        type: String,
        required: true
  }
});

module.exports = mongoose.model('userCollection', userSchema)