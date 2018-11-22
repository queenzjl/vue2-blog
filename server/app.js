const express = require("express");

const app = express();

const bodyParser = require("body-parser")

const artRouter = require('./routes/article'); //

const db = require("./config/db.js");   //打开数据库

app.use(bodyParser.json()); //解析json数据
app.use("/art", artRouter);

app.listen(3000, () => {
    console.log("启动成功");
});