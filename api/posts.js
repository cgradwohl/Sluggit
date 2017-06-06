const express = require('express'),
      router = express.Router(),
      Post = require('../models/post'),
      env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
      config = require('../config/environment')[env];

// ROUTES -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -



// api/posts/list
// Returns all posts from the db as a list or array object
router.get('/list', (req, res) => {
  Post.getAllPosts(function(items) {
    res.json(items);
  });
});

// api/posts/listPopular
// Returns all popular posts from the db as a list or array object
router.get('/listPopular', (req, res) => {
  Post.getPopularPosts(function(items) {
    res.json(items);
  });
});


// api/posts/list
// Returns all posts from the user in the db as a list or array object
router.get('/listUser/:id', (req, res) => {
  Post.getPostByUsername(req.params.id, function(items) {
    res.json(items);
  });
});

// api/posts/list
// Returns the post as a singular object
router.get('/post/:id', (req, res) => {
  Post.getPost(req.params.id, function(items) {
    res.json(items);
  });
});


// api/posts/add
// creates a new Post object and adds the pos to DB
router.post('/add', (req, res, next) => {
    let newTag = [
          {title: "News", num: 0},
          {title: "Software", num: 0},
          {title: "Discussion", num: 0},
          {title: "Video", num: 0},
          {title: "Travel", num: 0},
          {title: "Fitness", num: 0},
          {title: "Music", num: 0},
          {title: "Art", num: 0},
          {title: "Food", num: 0},
          {title: "Style", num: 0}];

    let newPost = new Post({
        title: req.body.title,
        description: req.body.description,
        username: req.body.username,
        timestamp: new Date().toDateString(),
        downvote: 0,
        upvote: 0,
        popularity: 0,
        votedUp: req.body.username,
        votedDown: req.body.username,
        tag: newTag,
        tagged: req.body.username,
    });

    Post.addPost(newPost, (err) => {
        if(err){
            res.json({success: false, msg:'Failed to add post!'});
        } else {
            res.json({success: true, msg:'Successfully added post!'});
        }
    });
});

// api/posts/postupvote
// upvotes a specific post that the user clicked.
router.post('/postupvote', (req, res, next) => {
  Post.addUpvote(req.body, function(success) {
    if(!success)
      res.json({success: false, msg:'Failed to upvote post!'});
    else {
      res.json({success: true, msg:'Successfully upvote post!'});
    }
  });
});

// api/posts/postupvote
// upvotes a specific post that the user clicked.
router.post('/postdownvote', (req, res, next) => {
  Post.addDownvote(req.body, function(success) {
    if(!success)
      res.json({success: false, msg:'Failed to downvote post!'});
    else {
      res.json({success: true, msg:'Successfully downvoted post!'});
    }
  });
});

// api/posts/edit
// edits user post
router.post('/edit', (req, res, next) => {
  let newPost = new Post({
      _id: req.body._id,
      description: req.body.description
    });
    Post.editPost(newPost, function(success) {
      if(success.deletedCount == 0)
        res.json({success: false, msg:'Failed to edit post!'});
      else {
        res.json({success: true, msg:'Successfully edited post!'});
      }
    });
});


// api/posts/delete
// deletes the post if given the id
router.delete('/delete/:id', (req, res) => {
    Post.deletePost(req.params.id, function(success) {
      if(success.deletedCount == 0)
        res.json({success: false, msg:'Failed to delete post!'});
      else {
        res.json({success: true, msg:'Successfully deleted post!'});
      }
    });
});

// api/posts/edit
// edits user post
router.post('/addTag', (req, res, next) => {
  console.log(req.body);
  let pst = {
      _id: req.body._id,
      title: req.body.tagTitle,
      username: req.body.username
    };
    Post.addTag(pst, function(success) {
      if(success.deletedCount == 0)
        res.json({success: false, msg:'Failed to tag post!'});
      else {
        res.json({success: true, msg:'Successfully tagged post!'});
      }
    });
});

module.exports = router;
