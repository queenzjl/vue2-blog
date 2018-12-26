const express = require('express');

const router = express.Router();

const ArtTag = require('../../schema/article/ArtTag.js');

module.exports = {
    findTag: function(req, callback) {
        
        ArtTag.find(req || {}).populate([{
            path: 'author', select: 'name -_id'}]).exec(function (err, result) {

            callback(err, result);
        })
    },
    findOneTag: function(params, callback){
       
        ArtTag.findOne(params || {}).populate([{
            path: 'author', select: 'name -_id'}]).exec(function (err, result) {

            callback(err, result);
        })
    },
    addArtTag: function(req, callback){
        let name = req.body.name;
        if(name != ''){
            ArtTag.create(req.body, function(err){
                callback(err);
            })
        }else{
            callback('-1');
        }
       
    },
    updateOne: function(req, callback){
        let params = req.body;
        let _id = params._id;
        let name = params.name;
        let updatetime = new Date();
        if(!name){
            callback(-1);
        }else{
            ArtTag.updateOne({
                _id: _id
            }, {
                $set: {
                    name: name,
                    updatetime: updatetime
                }
            }, function(err, result){
                callback(err, result);
            })
        }
    },
    remove: function(params,callback){
        ArtTag.deleteOne(params, function(err, result){
            callback(err, result);
        })
    }
}