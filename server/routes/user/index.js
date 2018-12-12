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
      result: [req.cookies]
    });
})

module.exports = router;