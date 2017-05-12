const mongoose = require('mongoose');
const config = require('../config/environment');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    // TODO description field
});

const Post = module.exports = mongoose.model('Post', PostSchema);



// DB METHODS   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// these methods will be call by api requests


// TODO getPostByTitle()
module.exports.getPostByTitle = () => {}

// TODO getPostById()
module.exports.getPostById = () => {}

// TODO addPost()
module.exports.addPost = () => {}
