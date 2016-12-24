const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: Date,
    slug: String
});


module.exports = mongoose.model("Post", PostSchema);
