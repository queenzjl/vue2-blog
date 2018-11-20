const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog");

const db = mongoose.connection;

db.once("open", function(){
    console.log("数据库成功打开");
})

module.exports = db;