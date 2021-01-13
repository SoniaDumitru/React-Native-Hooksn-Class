const mongoose = require('mongoose');

// create user model
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    }, 
    password: {
        type: String, 
        required: true
    }
});

mongoose.model('User', userSchema);