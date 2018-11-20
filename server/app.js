const express = require("express");

const app = express();

const artRouter = require('./routes/article/article.js');//文章模块路由

const db = require("./config/db.js");   //打开数据库

app.use("/server", artRouter);

app.listen(3000, () => {
    console.log("启动成功");
});