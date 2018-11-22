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
    artTagModel.findTag({}, (err, result) => {
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

module.exports = router;