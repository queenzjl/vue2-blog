const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moment = require('moment');

const artTypeSchema = new Schema({
    name: String,
    createtime: {
        type: Date,
        default: Date.now, 
        get: v => moment(v).format('YYYY-MM-DD HH:mm')
    }
})

const ArtType = mongoose.model('ArtType', artTypeSchema);

module.exports = ArtType;