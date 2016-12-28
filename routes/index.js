const express = require("express");
const passport = require("passport");
const router = express.Router();
const Post = require("../models/post");
const auth = require("./auth");
const admin = require("./admin");


router.get("/", (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            throw err;
        }
        res.render("index", { posts: posts });
    }).sort({ createdAt: -1 });
});

router.use("/admin", admin);
router.use(auth);




// router.use((req, res, next) => {
//     res.locals.currentUser = req.user;
//     res.locals.error = req.flash("error");
//     res.locals.info = req.flash("info");
//     next();
// });




// router.get("/post/create", authMiddleware, (req, res) => {
//     res.render("create", {});
// });

// router.get("/post/:postId", (req, res) => {
//     Post.findOne({ _id: req.params.postId }, (err, post) => {
//         if (err) {
//             throw err;
//         }


//         if (!post) {
//             req.flash("error", "Запрашиваемая статья не найдена.");
//             return res.redirect("/");
//         }


//         res.render("show", { post: post });
//     });
// });


// router.post("/post", (req, res) => {
//     let {title, content} = req.body;


//     if (!title || !content) {
//         return res.redirect("back");
//     }


//     new Post({ title, content, slug }).save((err) => {
//         if (err) {
//             throw err;
//         }
//         res.redirect("/");
//     });
// });


// router.post("/post/:postId", (req, res) => {

// });


// router.delete("/post/:postId", (req, res) => {

// });


module.exports = router;
