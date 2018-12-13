const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const cookieParser = require('cookie-parser');

const artRouter = require('./routes/article'); //
const userRouter = require('./routes/user');

const db = require("./config/db.js");   //打开数据库

app.use(bodyParser.json()); //解析json数据
app.use(cookieParser()); //请求cookie

app.use(express.static('public'))   //静态资源路径

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); // 可以带cookies
    if(req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
app.use('/art', (req, res, next) => {
    // console.log(req.cookies)
    if(req.cookies.userId){
        next();
    }else{
        res.json({
            code: 413,  //表示未登录
            status: 2,
            message: '用户未登录！'
        })
    }
})
app.use('/user', userRouter);
app.use("/art", artRouter);

app.listen(3000, () => {
    console.log("启动成功");
});