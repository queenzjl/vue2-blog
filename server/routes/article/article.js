/* 
    负责文章模块
*/

const express = require("express");

const router = express.Router();

const artModel = require("../../models/article/article.js");    //文章业务模块
const artTypeModel = require("../../models/article/artType.js");
//文章列表
router.get('/articleList', (req, res, next) => {
    let params = req.query;
    artModel.findArticle(params || {}, (err, result) => {
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
//查询谋篇文章
router.get('/oneArticle',(req, res, next) => {
    artModel.findOne({
          _id: req.query._id
        }, (err, result) => {
        if (err) {
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
//修改文章阅读人数
router.get("/updateArticle", (req, res, next) => {
    let params = req.query;
    artModel.update(params, (err, result) => {
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
//删除文章
router.get('/removeArticle', (req, res, next) => {
    let params = req.query;
    if(!params){
        res.json({
            code: 417,
            status: 1,
            message: '未指定要删除的文章'
        })
    }
    artModel.remove(params, (err, result) => {
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
module.exports = router;