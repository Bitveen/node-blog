// Configuration of an Application
const path = require("path");
const routes = require("./routes");
const handlebars = require("express-handlebars");
const express = require("express");
const bodyParser = require("body-parser");


module.exports = (app) => {
    // Third-party middlewares
    app.use(bodyParser.urlencoded({ extended: false }));

    routes(app);

    app.use(express.static(path.join(__dirname, "../public")));


    app.engine("handlebars", handlebars.create({
        defaultLayout: "main",
        layoutsDir: app.get("views") + "/layouts",
        partialsDir: app.get("views") + "/partials"
    }).engine);

    app.set("view engine", "handlebars");

    return app;
};
