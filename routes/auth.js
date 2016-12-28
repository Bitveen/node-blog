const express = require("express");
const router = express.Router();
const passport = require("passport");


router.get("/login", (req, res) => {
    res.render("auth/login");
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    res.redirect("admin/posts");
});


router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});






// router.get("/register", (req, res) => {
//     res.render("register", { user: req.user });
// });
//
//
// router.post("/register", (req, res) => {
//     User.register(new User({ username: req.body.username}), req.body.password, (err, user) => {
//         if (err) {
//             return res.render("register", { user: user });
//         }
//         passport.authenticate("local")(req, res, () => {
//             res.redirect("/");
//         });
//     });
// });

// router.get("/admin/login", (req, res) => {
//     if (req.isAuthenticated()) {
//         return res.redirect("/");
//     }
//     res.render("login");
// });



module.exports = router;