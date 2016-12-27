const express = require("express");
const passport = require("passport");
const router = express.Router();
const Post = require("../models/post");
const User = require("../models/user");



router.get("/", (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            throw err;
        }
        res.render("index", { posts: posts, user: req.user });
    }).sort({ createdAt: -1 });
});

router.get("/register", (req, res) => {
    res.render("register", {});
});
router.post("/register", (req, res) => {
    User.register(new User({ username: req.body.username}), req.body.password, (err, user) => {
        if (err) {
            return res.render("register", { user: user });
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect("/");
        });
    });
});

router.get("/login", (req, res) => {
    res.render("login", { user: req.user });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    res.redirect("/");
});


router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

router.get("/post/create", (req, res) => {
    res.render("create", { user: req.user });
});

router.get("/post/:postSlug", (req, res) => {
    res.render("show", { user: req.user });
});


router.post("/post", (req, res) => {
    let {title, content, slug} = req.body;


    if (!title || !content || !slug) {
        return res.redirect("back");
    }


    new Post({ title, content, slug }).save((err) => {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});


router.post("/post/:postId", (req, res) => {

});


router.delete("/post/:postId", (req, res) => {

});


module.exports = router;
