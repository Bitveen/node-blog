const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("express-flash");
const session = require("express-session");
const User = require("./models/user");

const router = require("./routes");


const app = express();



app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "./views" ));
app.set("view engine", "handlebars");



require("./config/database");



app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use(router);







app.use(express.static(path.join(__dirname, "./public")));
app.engine("handlebars", handlebars.create({
    defaultLayout: "main",
    layoutsDir: app.get("views") + "/layouts",
    partialsDir: app.get("views") + "/partials"
}).engine);











app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});


if (app.get("env") === "development") {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render("error", {
            message: err.message,
            error: err
        });
    });
}

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {}
    });
});





app.listen(app.get("port"), () => console.log("Server started..."));
