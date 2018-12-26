const express = require('express');

const crypto = require('crypto');



const router = express.Router();

const User = require('../../schema/user/User.js');    //user实体操作对象

module.exports = {
    addForm: function(req, callback){
        let params = req.body;
      
        if(!params.name || !params.password || !params.confirmPwd){
            callback(-1);   //信息未填写完整
        }else if(params.password !== params.confirmPwd){
            
            callback(-2);   //密码和确认密码不一致
       
        }else {
            let md5 = crypto.createHash("md5"); //md5加密方式
            params.password = md5.update(params.password).digest("hex");

            User.create(params, function(error){
                callback(error);
            })
        }
    },
    findOne: function(req, callback){

        let md5 = crypto.createHash("md5"); //md5加密方式
        let loginPwd = req.query.password;

        loginPwd = md5.update(loginPwd).digest("hex");

        User.findOne({"name": req.query.name} || {}, function(error, result){
            
            if(result){
                let correctPwd = result.password;   //数据库中的密码

                if(loginPwd === correctPwd){    //校验密码是否一致
                    
                    callback(error, result)
                }else{
                    callback(-2);   //密码错误
                }
            }else{
                callback(-1);   //用户名不存在
            }
           
        })
    },
    checkUser: function(params, callback){

        User.findOne( params || {}, function(error, result){
            
            if(result){
                callback(-1);   //用户名已存在
                
            }else{
                callback(error, result);   //用户名不存在
            }
           
        })
    },
    getUserList: function(req, callback){
        User.find(req.query || {}, function(error, result){
            callback(error, result);
        })
    }
}