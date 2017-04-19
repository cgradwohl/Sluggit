// login, register, profile

const express = require('express'),
    router = express.Router(),
    User = require('../models/user');


// register endpoint
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg:'Successfully registered user'});
        }
    });
});


// authenticate and login
router.post('/auth', (req, res, next) => {
    res.send('AUTHENTICATE AND LOGIN PAGE');
});


// profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE PAGE');
});


module.exports = router;
