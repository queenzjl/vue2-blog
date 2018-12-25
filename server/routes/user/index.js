/* 
    用户管理模块
*/

const express = require('express');

const router = express.Router();


const userModel = require('./../../models/user/user');

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

router.get('/login', (req, res, next) => {
    userModel.findOne(req, (error, result) => {
        if(error){
            res.json({
                code: 417,
                status: 1,
                message: error
            })
            return;
        }
        if(!result){
            res.json({
                code: 417, 
                status: 2,
                message: '用户名不存在'
            })
            return;
        }else{
            res.cookie("userId", result._id,{
                path: '/',
                maxAge: 1000 * 60 * 60
            });
            res.cookie("username", result.name, {
                path: '/',
                maxAge: 1000 * 60 * 60
            })
    
            res.json({
                code: 0,
                status: 200,
                results: result
            })
        }
    })
})

module.exports = router;