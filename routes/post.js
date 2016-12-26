const express = require("express");
const router = express.Router();
const moment = require("moment");

/* Роут для индексной страницы, где отображаются все посты */
router.get("/", (req, res) => {
    let promise = new Promise((resolve, reject) => {
        Post.find({}, (err, posts) => {
            if (err) {
                reject(err);
            }
            resolve(posts);
        }).sort({ createdAt: -1 });
    });
    promise.then((posts) => {
        res.render("index", { posts });
    }).catch((err) => {
        console.log(err);
    });
});

/* Роут для отображения формы добавления статьи */
router.get("/post/create", (req, res) => {
    res.render("create");
});

/* Роут для отображения отдельной статьи */
router.get("/post/:postSlug", (req, res) => {
    res.render("show");
});

/* Роут для создания новой статьи */
router.post("/post", (req, res) => {
    let {title, content, slug} = req.body;
    let createdAt = moment().unix();

    if (!title || !content || !slug) {
        res.locals.postError = true;
        return res.redirect("back");
    }


    let newPost = new Post({ title, content, slug, createdAt });
    newPost.save((err) => {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});

/* Роут для обновления существующей статьи */
router.post("/post/:postId", (req, res) => {

});

/* Роут для удаления статьи */
router.delete("/post/:postId", (req, res) => {

});


module.exports = router;
