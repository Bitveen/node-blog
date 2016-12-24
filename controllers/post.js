const moment = require("moment");
const Post = require("../models/post");

module.exports = {
    index(req, res) {

        let promise = new Promise((resolve, reject) => {
            Post.find({}, (err, posts) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(posts);
            });
        });


        promise.then((posts) => {
            res.render("index", { posts });
        }).catch((err) => {
            console.log(err);
        });
    },

    show(req, res) {
        res.render("show", { post: testData[0] });
    },

    showForm(req, res) {
        res.render("create", { createPostError: req.app.get("create-post-error") });
    },


    // create new post
    create(req, res) {
        res.app.set("create-post-error", false);
        let {title, content, slug} = req.body;
        let createdAt = moment().unix();

        if (!title || !content || !slug) {
            res.app.set("create-post-error", true);
            res.redirect("/post/create");
            return;
        }




        let post = new Post({ title, content, slug, createdAt });
        post.save((err) => {
            if (err) {
                throw err;
            }
            res.redirect("/");
        });



    },

    update(req, res) {

    },



    delete(req, res) {

    }
};
