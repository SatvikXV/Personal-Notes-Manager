const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  url: String,
  title: String,
  description: String,
  tags: [String],
  favorite: { type: Boolean, default: false },
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);
