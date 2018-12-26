const express = require('express');

const router = express.Router();

const artTagModel = require('../../models/article/artTag.js');

router.post('/addArtTag', (req, res, next) => {
    artTagModel.addArtTag(req, (err) => {
        if(err == -1){
            res.json({
                code: 417,
                status: 1,
                message: '请输入标签名称！'
            })
            return;
        }else if(err){
            res.json({
              code: 417,
              status: 1,
              message: '请输入标签名称！'
            })
        }
        res.json({
          code: 0,
          status: 200,
          message: '添加成功！'
        })
    }) 
});

router.get('/artTagList', (req, res, next) => {
    artTagModel.findTag(req.query || {}, (err, result) => {
        if(err){
            res.json({
              code: 417,
              status: 1,
              message: '请输入标签名称！'
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
router.get('/getOneTag', (req, res, next) => {
    let _id = req.query._id;
    if(!_id){
        res.json({
            code: 417,
            status: 1,
            message: "缺少参数"
        })
        return;
    }
    artTagModel.findOneTag(req.query, (err, result) => {
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

//修改标签
router.post('/updateOneTag', (req, res, next) => {
    artTagModel.updateOne(req, (err, result) => {
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

//删除
router.get('/removeTag', (req, res, next) => {
    let params = req.query;
    if(!params){
        res.json({
          code: 417,
          status: 1,
          message: '未指定要删除的标签！'
        })
        return;
    }
    artTagModel.remove(params, (err, result) => {
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