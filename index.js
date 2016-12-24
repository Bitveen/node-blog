// Application entry point
const express = require("express");
const config = require("./config");
const mongoose = require("mongoose");

let app = express();

app.set("port", process.env.PORT || 8080);
app.set("views", __dirname + "/views");

app = config(app);

mongoose.connect(app.get("mongoURL"));
mongoose.connection.on("open", () => {
    console.log("connection established");
});


app.listen(app.get("port"), () => console.log("Server started..."));
