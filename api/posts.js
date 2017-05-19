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



// api/posts/add
// creates a new Post object and adds the pos to DB
router.post('/add', (req, res, next) => {
    let newPost = new Post({
        title: req.body.title,
        description: req.body.description,
        username: req.body.username,
        timestamp: new Date().toDateString(),
    });

    Post.addPost(newPost, (err) => {
        if(err){
            res.json({success: false, msg:'Failed to add post!'});
        } else {
            res.json({success: true, msg:'Successfully added post!'});
        }
    });
});



// api/posts/edit
/*router.put('edit/:id', (req, res, next) => {
  if (!req.params.id) return next(new Error('No article ID.'));

  Post.getPostById(req.params.id)
});*/



// api/posts/del
// TODO app.del('/api/posts/:id', routes.article.del);

module.exports = router;
