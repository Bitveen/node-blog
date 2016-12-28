module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash("info", "Данное действие запрещено для не авторизованных пользователей");
        res.redirect("/login");
    }

};