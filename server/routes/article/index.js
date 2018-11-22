/* 
文章管理路由首页
*/

const express = require('express');

const router = express.Router();

const articleRouter = require('./article.js');  //引入文章模块
const articleType = require('./artType.js');    //引入文章分类模块
const articleTag = require('./artTag.js');   //引入文章标签模块


router.use(articleRouter);
router.use(articleType);
router.use(articleTag);

module.exports = router;