const mongoose = require('mongoose');
const bcrypt = require( 'bcryptjs');
const config = require('../config/environment');

const UserSchema = mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);


// DB METHODS   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// these methods will be call by api requests


// getUserById()
// gets the user object by hashing its id
module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

// getUserByUsername()
// gets the user by querying its username
module.exports.getUserByUsername = (username, callback) => {
    const query = {username: username}
    User.findOne(query, callback);
}


// addUser()
// adds the user to the DB by hashing an ID and password
module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}


// editUser()
// Looks up curr user by ID and updates information
module.exports.editUser = (updatedUser, callback) => {

    User.findOneAndUpdate(updatedUser._id, updatedUser, function(error, result){
        if(error){
            callback(error);
        }else{
            console.log(result);
            result.save(callback);

        }
    });
}




// comparePassword()
// checks to see if the user has the correct password for their token
module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if( err ) throw err;
        callback(null, isMatch);
    });
}
