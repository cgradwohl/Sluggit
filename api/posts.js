const express = require('express'),
    router = express.Router(),
    Post = require('../models/post'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('../config/environment')[env];


// ROUTES -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -


// /register
// creates a new Post object to be stored into DB
router.post('/add', (req, res, next) => {
    let newPost = new Post({
        title: req.body.title,
        author: req.body.author,
        username: req.body.username,
        body: req.body.body
    });

    Post.addPost(newPost, (err) => {
        if(err){
            res.json({success: false, msg:'Failed to add post'});
        } else {
            res.json({success: true, msg:'Successfully added post'});
        }
    });
});

module.exports = router;
