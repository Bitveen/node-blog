const fs = require("fs");
const testData = fs.readFileSync(__dirname + "/../config/data.json", "utf-8");

module.exports = {
    index(req, res) {
        res.render("index", { posts: JSON.parse(testData) });
    },

    show(req, res) {
        res.render("show", { postId: req.params.postId });
    },

    create(req, res) {

    },

    update(req, res) {

    },

    showForm(req, res) {
        res.send("Show form");
    },

    delete(req, res) {

    }
};
