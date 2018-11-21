const express = require("express");

const app = express();

const bodyParser = require("body-parser")

const artRouter = require('./routes/article/article.js'); //文章模块路由
const artTypeRouter = require('./routes/article/artType.js');//文章分类模块路由

const db = require("./config/db.js");   //打开数据库

app.use(bodyParser.json()); //解析json数据
app.use("/server", artRouter);
app.use("/art", artTypeRouter);

app.listen(3000, () => {
    console.log("启动成功");
});