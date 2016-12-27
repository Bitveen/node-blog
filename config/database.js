/*
* Настройки базы данных
* */
const mongoose = require("mongoose");
const MONGOOSE_URI = "mongodb://localhost:27017/blog";

mongoose.connect(MONGOOSE_URI);
mongoose.Promise = global.Promise;

mongoose.connection.on("open", () => console.log("Connection to database established"));
