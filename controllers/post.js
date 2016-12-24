module.exports = {
    index(req, res) {
        res.render("index");
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
