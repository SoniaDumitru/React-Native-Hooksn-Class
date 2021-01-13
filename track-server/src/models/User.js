const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', function() {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }

    // generate SALT and hash it
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

// test password if they match
userSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            } 
            if (!isMatch) {
                return reject(false);
            }
            resolve(true);
        });
    })
}

mongoose.model('User', userSchema);