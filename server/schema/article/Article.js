const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    type: [{
        type: Schema.Types.ObjectId,
        ref: "ArtType"
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "ArtTag"
    }],
    read: {
        type: Number,
        default: 0
    },
    content: String,
    support: {
        type: Number,
        default: 0
    },
    createtime: {
        type: Date,
        default: Date.now
    },
    updatetime: {
        type: Date,
        default: Date.now
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;