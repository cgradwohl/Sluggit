const mongoose = require('mongoose');
const bcrypt = require( 'bcryptjs');
const config = require('../config/environment');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    body: {
        type: String,
    },
    timestamp: {
      type: String
    },
    tags: {
        type: String
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);


// addPost()
// adds a new post to mongoDB
module.exports.addPost = (newPost, callback) => {
    newPost.save(callback);
}


// getPostByUsername()
// gets user post data from mongodb
module.exports.getPostByUsername = (username, callback) => {
    const userQuery = {username: username}
    Post.findOne(userQuery, callback);
}
