const express = require("express");

const router = express.Router();

const Article = require("../../schema/article/Article.js"); //实体操作对象

module.exports = {
    addForm: function(req, callback){
        let params = req.body
        if(params.title != '' && params.author != ''){

            Article.create(params, function(err){
                callback(err);  
            })
        }else {
            callback('-1');//定义一个约束，-1表示参数没有填写完整
        }
    }
}