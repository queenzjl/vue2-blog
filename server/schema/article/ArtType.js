const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moment = require('moment');

const artTypeSchema = new Schema({
    name: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    createtime: {
        type: Date,
        default: Date.now, 
        get: v => moment(v).format('YYYY-MM-DD HH:mm')
    },
    updatetime: {
      type: Date,
      default: Date.now,
      get: v => moment(v).format('YYYY-MM-DD HH:mm')
    }
})

const ArtType = mongoose.model('ArtType', artTypeSchema);

module.exports = ArtType;