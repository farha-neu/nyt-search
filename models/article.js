const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  articleId:{
    type:String,
    required:true
  },
  title: {
    type: String,
    required: true
  },
  snippet:{
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  byline:{
    type:String
  },
  image:{
    type:String
  },
  dateSaved:{
    type:Date,
    default:Date.now
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;