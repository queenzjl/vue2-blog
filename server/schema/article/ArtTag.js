const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artTagSchema = new Schema({
    name: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    createtime: {
        type: Date,
        default: Date.now
    },
    updatetime: {
      type: Date,
      default: Date.now
    }
})

const ArtTag = mongoose.model('ArtTag', artTagSchema);

module.exports = ArtTag;