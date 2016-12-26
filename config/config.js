// All application configurations

const path = require("path");
const postRouter = require("../routes/post");
const handlebars = require("express-handlebars");
const express = require("express");
const bodyParser = require("body-parser");

module.exports = (app) => {

    // Third-party middleware
    app.use(bodyParser.urlencoded({ extended: false }));


    // Router
    app.use(postRouter);


    // Views
    app.use(express.static(path.join(__dirname, "../public")));

    app.set("views", path.join(__dirname, "../views" ));

    app.engine("handlebars", handlebars.create({
        defaultLayout: "main",
        layoutsDir: app.get("views") + "/layouts",
        partialsDir: app.get("views") + "/partials"
    }).engine);

    app.set("view engine", "handlebars");


    // Database settings and connection
    require("./database");

    return app;
};
