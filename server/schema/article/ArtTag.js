const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artTagSchema = new Schema({
    name: String,
    createtime: {
        type: Date,
        default: Date.now
    }
})

const ArtTag = mongoose.model('ArtTag', artTagSchema);

module.exports = ArtTag;