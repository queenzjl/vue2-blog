const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    author: String,
    type: String,
    tags: String,
    read: Number,
    content: String,
    support: Number,
    createtime: Date,
    updatetime: Date
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;