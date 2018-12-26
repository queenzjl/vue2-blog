/**
 * 用户登录模块
 */

const express = require('express');

const router = express.Router();

const userModel = require('../../models/user/user');

//校验登录
router.get('/checkLogin', (req, res, next) => {
    if(!req.cookies.userId){
        res.json({
            code: 417,
            status: 1,
            message: '用户未登录'
        })
        return;
    }
    res.json({
      code: 0,
      status: 200,
      results: [req.cookies]
    });
})
//注册
router.post('/addUser', (req, res, next) => {
    userModel.addForm(req, (error)=> {
        if(error == -1){
            res.json({
                code: 417,
                status: 1,
                message: '信息填写不完整！'
            })
            return;
        }else if(error == -2){
            res.json({
                code: 417,
                status: 2,
                message: '密码不一致，请重新填写！'
            })
            return;
        }

        res.json({
            code: 0,
            status: 200,
            message: '添加成功！'
        })
    })    
})
//登录
router.get('/login', (req, res, next) => {
    userModel.findOne(req, (error, result) => {
        if(error == -1){
            res.json({
                code: 417, 
                status: 1,
                message: '用户名不存在'
            })
            return;
        }else if(error == -2){
            res.json({
                code: 417, 
                status: 2,
                message: '用户名或密码错误'
            })
            return;
        }else if(error){
            res.json({
                code: 417, 
                status: 3,
                message: error
            })
            return;
        }

        res.cookie("userId", result._id,{
            path: '/',
            maxAge: 1000 * 60 * 60
        });
        res.cookie("username", result.name, {
            path: '/',
            maxAge: 1000 * 60 * 60
        })
        res.cookie("userRank", result.rank, {
            path: '/',
            maxAge: 1000 * 60 * 60
        })

        res.json({
            code: 0,
            status: 200,
            results: result
        }) 
            
    }) 
    
})
//校验用户名
router.get('/checkUser', (req, res, next) => {
    userModel.checkUser(req.query, (error, result) => {
        if(error == -1){
            res.json({
                code: 417,
                status: 1,
                message: "用户名已存在"
            })
            return;
        }
        res.json({
            code: 0,
            status: 200,
            results: result
        }) 
    })
})

module.exports = router;