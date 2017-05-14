const express = require('express'),
      router = express.Router(),
      Post = require('../models/post'),
      env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
      config = require('../config/environment')[env],
      passport = require('passport');


// ROUTES -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -


// /add
// creates a new Post object and adds the pos to DB
router.post('/add', (req, res, next) => {
    let newPost = new Post({
        title: req.body.title,
        author: req.body.author,
        username: req.body.username,
        description: req.body.description,
        timestamp: new Date(),
        upvote: 0,
        downvote: 0
    });

    if(req.isAuthenticated())
    {
      Post.addPost(newPost, (err) => {
          if(err){
              res.json({success: false, msg:'Failed to add post'});
          } else {
              res.json({success: true, msg:'Successfully added post'});
          }
      });
    }
    else {
      res.json({success: false, msg:'Login to post.'})
    }
});


router.get('/getPost', (req, res) => {
  console.log('getPost()');
  Post.getAllPosts(function(items) {
    console.log(items);
  });
});


// /getUserPost
// right now this simply confirms that the user has posted data to db
// TODO: need to be able to display the actual post data from a registered user.
router.post('/getUserPost', (req, res, next) => {
    const username = req.body.username;

    Post.getPostByUsername(username, (err, user, postdata) => {
        if(err) throw err;
        if (!user){
            return res.json({success: false, msg: 'User not found'});
        } else {
            res.json({success:true, msg: 'User Post data has been found.'});
        }
    });
});

module.exports = router;
