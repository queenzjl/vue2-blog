const express = require('express');

const router = express.Router();

const User = require('./../../schema/user/user.js');    //user实体操作对象

module.exports = {
    addForm: function(req, callback){
        let params = req.body;
        console.log(params)
        if(!params.name || !params.password || !params.confirmPwd){
            callback(-1);   //信息未填写完整
        }else if(params.password !== params.confirmPwd){
            callback(-2);   //密码和确认密码不一致
       
        }else {
            User.create(params, function(error){
                callback(error);
            })
        }
    },
    findOne: function(req, callback){
        console.log(req.query)
        User.findOne(req.query || {}, function(error, result){
            console.log(error)
            console.log(result)
            callback(error, result);
        })
    }
}