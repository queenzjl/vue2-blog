const express = require("express");

const router = express.Router();

const Article = require("../../schema/article/Article.js"); //实体操作对象

module.exports = {
    findArticle: function(params, callback){
        Article.find(params || {}).populate([{
            path: 'type',select:'name -_id'
          },{path: 'tags',select: 'name -_id'}]).exec(function (err, result) {
            callback(err, result);
        })
    },
    findOne: function(params, callback){
        Article.findOne(params || {}).populate([{
            path:'type', select: 'name -_id'
          },{path: 'tags', select: 'name -_id'}]).exec(function(err, result){
                
            callback(err, result);
        })
    },
    addForm: function(req, callback){
        let params = req.body
        if(params.title != '' && params.author != '' && params.tags != '' && params.type != '' && params.content != ''){

            Article.create(params, function(err){
                callback(err);  
            })
        }else {
            callback('-1');//定义一个约束，-1表示参数没有填写完整
        }
    },
    update: function(params, callback){

        let _id = params._id;
        let read = 0;
        this.findOne({_id: _id}, function(err, result){
            if(err){
                return;
            }
            console.log(result.read)
            read = Number(result.read);
            
            Article.updateOne({_id: _id}, {$set: {read: ++read}},function(err, result){
                callback(err, result);
            })
        })
    },
    remove: function(params, callback){
        Article.deleteOne(params, function(err, result){
            callback(err, result);
        })
    }
}