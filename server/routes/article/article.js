/* 
    负责文章模块
*/

const express = require("express");

const router = express.Router();

const artModel = require("../../models/article/article.js");    //文章业务模块
const artTypeModel = require("../../models/article/artType.js");
//文章列表
router.get('/articleList', (req, res, next) => {
    artModel.findArticle({}, (err, result) => {
        if(err){
            res.json({
                code: 417,
                status: 1,
                message: err
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
//新增文章
router.post("/addArticle", function (req, res, next) {
    //传入req对象
    artModel.addForm(req, function(err){
        if(err == '-1'){
            res.json({
                code: 417,
                status: 1,
                message: "资料没有填写完呢！"
            });
            return;
        }else if(err){
            res.json({
                code: 417,
                status: 1,
                message: err
            });
            return;
        }
        res.json({
            code: 0,
            status: 200,
            message: "添加成功！"
        });
    })
})
//查询文章分类
// router.get("/addArticle", function(req, res, next){
//     //查询分类
//     artTypeModel.findType({}, function(err, result){

//     })
// })
module.exports = router;