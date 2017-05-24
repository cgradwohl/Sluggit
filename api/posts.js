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
// Returns all posts from the db as a list or array object
router.get('/listUser', (req, res) => {
  let uname = req.body.username;
  Post.getPostByUsername(uname, function(items) {
    res.json(items);
  });
});


// api/posts/add
// creates a new Post object and adds the pos to DB
router.post('/add', (req, res, next) => {
  console.log(2);
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
// NOT FINISHED
/*router.put('edit/:id', (req, res, next) => {
  if (!req.params.id) return next(new Error('No article ID.'));

  Post.getPostById(req.params.id)
});*/
router.put('/put', (req, res, next) => {
  let newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      username: req.body.username,
      timestamp: new Date().toDateString(),
      id: req.body.id,
    });

    Post.editPost(newPost, (err) => {
      if(err){
          res.json({success: false, msg:'Failed to edit post!'});
      } else {
          res.json({success: true, msg:'Successfully edited post!'});
      }
    })
})





// api/posts/del
// TODO app.del('/api/posts/:id', routes.article.del);
router.delete('/delete', (req, res) => {
  console.log(req.body);
  console.log("delete()");
  Post.deletePost(req, (err) => {
    if(err){
        res.json({success: false, msg:'Failed to delete post!'});
    } else {
        res.json({success: true, msg:'Successfully deleted post!'});
    }
  });
});




module.exports = router;
