const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
// title, a string, must be entered
title: {
  type: String,
  required: true,
  unique: { index: { unique: true } }
},
// date is just a string
date: {
  type: Date,
  default: Date.now
},
// url, a string, must be entered
url: {
  type: String,
  required: true
},
saved: {
  type: Boolean,
  default: false
}});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
