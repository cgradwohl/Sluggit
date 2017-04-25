const express = require('express'),
    router = express.Router(),
    Post = require('../models/post'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('../config/environment')[env];


// ROUTES -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -


// /add
// creates a new Post object and adds the pos to DB
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


// /getUserPost
// retrieves post data from a user from the database
router.post('/getUserPost', (req, res, next) => {
    const username = req.body.username;

    Post.getPostByUsername(username, (err, user, postdata) => {
        if(err) throw err;
        if (!user){
            return res.json({success: false, msg: 'User not found'});
        } else {
            res.json({success:true, msg: 'User Post data has been found.'});
            res.json({
                postdata: {
                    postBody: postdata.body
                }
            });
        }
    });
});

module.exports = router;
