const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  name: String,
  text: String,
  category: String,
});

const News = mongoose.model('News', newsSchema);

module.exports = News;