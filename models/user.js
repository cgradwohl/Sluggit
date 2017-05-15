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


module.exports.editUser = (updatedUser, callback) => {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
    // Find the existing resource by ID
    User.findById(updatedUser._id, function (err, user) {  
        // Handle any possible database errors
        if (err) {
            //console.log(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
            // If that attribute isn't in the request body, default back to whatever it was before.
            User.name = updatedUser.name;
            User.username = updatedUser.username;
            User.email = updatedUser.email;

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(updatedUser.password, salt, (err, hash) => {
                    User.password = hash;
             });
            });

            console.log(User.name);
            console.log(User.password);
            console.log(User.username);
            
            // Save the updated user back to the database
            updatedUser.save(function (err, user) {
                if (err) {
                    //console.log("foo");
                    //console.log(error);
                }
                //console.log(user);
               // console.log("made it here")

            });
        }
    });

    updatedUser.save(callback);
}






// comparePassword()
// checks to see if the user has the correct password for their token
module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if( err ) throw err;
        callback(null, isMatch);
    });
}
