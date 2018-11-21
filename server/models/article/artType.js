const express = require('express');

const router = express.Router();

const ArtType = require('../../schema/article/ArtType.js'); //文章分类实体对象

module.exports = {
    findType: function(params, callback){
        ArtType.find(params || {}, function(err, result){
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
    }
}