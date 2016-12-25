// All application configurations

const path = require("path");
const postRoutes = require("../routes/postRoutes");
const handlebars = require("express-handlebars");
const express = require("express");
const bodyParser = require("body-parser");

module.exports = (app) => {

    // Third-party middlewares
    app.use(bodyParser.urlencoded({ extended: false }));


    // Router
    app.use(postRoutes);


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


