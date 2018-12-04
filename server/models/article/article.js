const express = require("express");

const router = express.Router();

const Article = require("../../schema/article/Article.js"); //实体操作对象

module.exports = {
    findArticle: function(params, callback){
        Article.find(params || {}).populate([{
            path: 'type',select:'name -_id'
          },{path: 'tags',select: 'name -_id'}]).exec(function (err, result) {
              console.log(result)
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
    }
}