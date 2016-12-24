const fs = require("fs");
const testData = JSON.parse(fs.readFileSync(__dirname + "/../config/data.json", "utf-8"));
const moment = require("moment");


module.exports = {
    index(req, res) {
        res.render("index", { posts: testData });
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





        // insert into db
        res.redirect("/");

    },

    update(req, res) {

    },



    delete(req, res) {

    }
};
