// public feed, posts
const express = require('express'),
    router = express.Router(),
    Feed = require('../models/post');


router.get('/posts', (req, res, next) => {
    res.send('SLUGGIT PUBLIC FEED');
});


module.exports = router;
