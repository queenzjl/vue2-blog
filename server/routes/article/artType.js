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
    artTypeModal.findType({}, (err, result) => {
        if(err){
            res.json({
                code: 417,
                message: err
            })
            return;
        }
        res.json({
            code: 0,
            results: result
        })
    })
})

module.exports = router;