const mongoose = require('mongoose'),
      bcrypt = require( 'bcryptjs'),
      config = require('../config/environment');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    timestamp: {
      type: String
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);
const db = mongoose.connection;

// addPost()
// adds a new post to mongoDB
module.exports.addPost = (newPost, callback) => {
    newPost.save(callback);
}

// getAllPosts()
// gets all Posts
module.exports.getAllPosts = (res) => {
      const collection = db.collection('posts');
      collection.find().toArray(function (err, items) {
        return res(items);
      });
}

// getPostByUsername()
// gets user post data from mongodb
module.exports.getPostByUsername = (username, callback) => {
    const userQuery = {username: username}
    Post.findOne(userQuery, callback);
}
