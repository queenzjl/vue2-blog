/* 
    负责文章模块
*/

const express = require("express");

const router = express.Router();

const artModel = require("../../models/article/Article.js");    //文章业务模块

//文章列表

//新增文章
router.post("/addArticle", function (req, res, next) {
    //传入req对象
    artModel.addForm(req, function(err){
        if(err == '-1'){
            res.json({
                status: 1,
                message: "资料没有填写完呢！"
            });
            return;
        }else if(err){
            res.json({
              status: 1,
              message: err
            });
            return;
        }
        res.json({
          status: 200,
          message: "添加成功！"
        });
    })
})

module.exports = router;