// Routes for Application
const express = require("express");
const router = express.Router();
const post = require("../controllers/post");

module.exports = (app) => {
    router.get("/", post.index);
    router.get("/post/create", post.showForm);
    router.get("/post/:slug", post.show);



    router.post("/post", post.create);
    router.post("/post/:postId", post.update);
    router.delete("/post/:postId", post.delete);

    app.use(router);
};
