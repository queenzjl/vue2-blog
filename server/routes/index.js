/* 
文章管理路由首页
*/

const express = require('express');

const router = express.Router();

const articleRouter = require('./article/article');  //引入文章模块
const articleType = require('./article/artType');    //引入文章分类模块
const articleTag = require('./article/artTag');   //引入文章标签模块

const userRouter = require('./user/user'); //引入用户模块


router.use(userRouter);
router.use(articleRouter);
router.use(articleType);
router.use(articleTag);

module.exports = router;