const mongoose = require("mongoose");
const MONGOOSE_URI = "mongodb://localhost:27017/blog";



mongoose.connect(MONGOOSE_URI);
mongoose.connection.on("open", () => {
    console.log("Connection to database established");
});
