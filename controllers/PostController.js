const moment = require("moment");
const Post = require("../models/Post");

class PostController {
    static index(req, res) {

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


    }

    static show(req, res) {

        res.render("show", {
            post: {

            } 
        });

    }


    static create(req, res) {
        res.render("create", { 
            postCreateError: req.app.get("post-create-error") 
        });
    }

    static store(req, res) {
        res.app.set("post-create-error", false);
        let {title, content, slug} = req.body;
        let createdAt = moment().unix();

        if (!title || !content || !slug) {
            res.app.set("post-create-error", true);
            res.redirect("/post/create");
            return;
        }

        let newPost = new Post({ title, content, slug, createdAt });

        newPost.save((err) => {
            if (err) {
                throw err;
            }
            res.redirect("/");
        });
    }

    static update(req, res) { /* TODO */ }
    static delete(req, res) { /* TODO */ }

}












module.exports = PostController;





