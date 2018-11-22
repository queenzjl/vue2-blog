const express = require('express');

const router = express.Router();

const ArtTag = require('../../schema/article/ArtTag.js');

module.exports = {
    findTag: function(req, callback) {
        ArtTag.find(req || {}, function(err, result){
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
       
    }
}