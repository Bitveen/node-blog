// Application entry point
const express = require("express");
const config = require("./config");
let app = express();

app.set("port", process.env.PORT || 8080);
app.set("views", __dirname + "/views");

app = config(app);

app.listen(app.get("port"), () => console.log("Server started..."));
