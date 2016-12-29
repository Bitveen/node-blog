const express = require("express");
const passport = require("passport");
const router = express.Router();
const auth = require("../middlewares/auth");
const Post = require("../models/post");




router.get("/posts", auth, (req, res) => {

    Post.find({}, (err, posts) => {
        if (err) {
            throw err;
        }

        res.render("admin/index", { posts: posts });
    });
});

router.get("/posts/create", (req, res) => {
    res.render("admin/create");
});



module.exports = router;
