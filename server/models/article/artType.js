const express = require('express');

const router = express.Router();

const ArtType = require('../../schema/article/ArtType.js'); //文章分类实体对象

module.exports = {
    findType: function(params, callback){
        
        ArtType.find(params || {}).populate([{
            path: 'author', select: 'name -_id'}]).exec(function (err, result) {

            callback(err, result);
        })
    },
    findOne: function(params, callback){
        
        ArtType.findOne(params || {}).populate([{
            path: 'author', select: 'name -_id'}]).exec(function (err, result) {

            callback(err, result);
        })
    },
    addType: function(req, callback){
        let params = req.body;
        if(params.name != ''){
            // params.createtime = new Date();
            ArtType.create(params, function(err){
                callback(err);
            })
        }else{
            callback(-1);   //表单没填写完整
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
            ArtType.updateOne({
              _id: _id
            }, {
              $set: {
                name: name,
                updatetime: updatetime
              }
            }, function (err, result) {
              callback(err);
            })
        }
        
    },
    remove: function (params, callback) {
        ArtType.deleteOne(params, function (err, result) {
            callback(err, result);
        })
    }
}