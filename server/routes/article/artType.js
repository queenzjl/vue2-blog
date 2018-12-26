const express = require('express');

const router = express.Router();

const artTypeModal = require('../../models/article/artType.js');

//新增文章分类
router.post('/addType', (req, res, next) => {
    artTypeModal.addType(req, (err) => {
        if(err == '-1'){
            res.json({
                code: 417,
                status: 1,
                message: "表单未填写完整!"
            })
            return;
        }else if(err){
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
            message: "添加成功！"
        })
    })
})

//文章分类列表
router.get('/artTypeList', (req, res, next) => {
    artTypeModal.findType(req.query || {}, (err, result) => {
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
//查询某个分类
router.get('/oneArtType', (req, res, next) => {
    let _id = req.query._id;
    if(_id){
        artTypeModal.findOne(req.query, (err, result) => {
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
    }
})
router.post('/updateType', (req, res, next) => {
    artTypeModal.updateOne(req, (err, result) => {
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
}),
router.get('/removeType', (req, res, next) => {
    let params = req.query;
    if (!params) {
        res.json({
            code: 417,
            status: 1,
            message: '未指定要删除的分类！'
        })
    }
    artTypeModal.remove(params, (err, result) => {
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
module.exports = router;