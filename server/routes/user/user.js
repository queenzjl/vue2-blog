/* 
    用户管理模块
*/

const express = require('express');

const router = express.Router();

const userModel = require('../../models/user/user');

//获取用户列表
router.get("/getUserList", (req, res, next) => {
    userModel.getUserList(req, (error, result) => {
        if(error){
            res.json({
                code: 417,
                status: 1,
                message: error
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