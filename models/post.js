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
        required: true
    },
    username: {
      type: String,
      required: true
    },
    timestamp: {
      type: String,
      required: true
    },
    upvote: {
      type: Number
    },
    downvote: {
      type: Number
    },
    popularity: {
      type: Number
    },
});

const Post = module.exports = mongoose.model('Post', PostSchema);
const db = mongoose.connection;
const collection = db.collection('posts');
const ObjectId = require('mongodb').ObjectID;

// addPost()
// adds a new post to mongoDB
module.exports.addPost = (newPost, callback) => {
    newPost.save(callback);
};

// editPost()
// edits a post to mongoDB
module.exports.editPost = (newPost, callback) => {
    newPost.update(collection.find({id: newPost.id}));
}

// getAllPosts()
// gets all Posts
module.exports.getAllPosts = (res) => {
      collection.find().toArray(function (err, items) {
        return res(items);
      });
};

// getPopularPosts()
// gets all Popular Posts
module.exports.getPopularPosts = (res) => {
      collection.find().sort({popularity: -1}).toArray(function (err, items) {
        return res(items);
      });
};


// getPostByUsername()
// gets user post data from mongodb
module.exports.getPostByUsername = (uname, res) => {
    collection.find({username: uname}).sort({popularity: -1}).toArray(function (err, items) {
      return res(items);
    });
};


// deletePost()
// deletes post based on userID
module.exports.deletePost = (pId, res) => {
  collection.deleteOne({_id: ObjectId(pId)}, function(err, results) {
    if(err)
      throw err;
    return res(results);
      });
  };

// addUpvote()
// upvotes selected post
module.exports.addUpvote = (pst, callback) => {
  collection.update({_id: ObjectId(pst._id)}, { $inc: {upvote: 1, popularity: 1}}, function(err, result) {
    if (err)
        throw err;
      });
};

// addDownvote()
// downvotes selected post
module.exports.addDownvote = (pst, callback) => {
  collection.update({_id: ObjectId(pst._id)}, { $inc: { downvote: 1, popularity: -1}}, function(err, result) {
    if (err)
        throw err;
      });
};
