const express = require('express'),
    router = express.Router(),
    User = require('../models/user'),
    jwt = require('jsonwebtoken'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('../config/environment')[env];


// ROUTES -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -


// api/users/register
// creates a new User object to be stored into DB
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    // addUser()
    // defined in the User model, adds a new user if possible
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg:'Successfully registered user'});
        }
    });
});


// api/users/auth
// authenticates existing users from the DB using a JWT passport strategy (see ./config/passport.js)
router.post('/auth', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user){
            return res.json({success: false, msg: 'User not found'})
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if( err ) throw err;
            if( isMatch ){
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong Password'});
            }
        })
    })
});


// api/users/profile
// retrieves user profile data from the database
// this is a protected route using passport-jwt strategy
// user must have a valid jsonwebtoken to access this path
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});



module.exports = router;
