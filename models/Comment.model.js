const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  name: String,
  text: String,
  news: String,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;