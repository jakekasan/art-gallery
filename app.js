const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/index")();
const homeController = require("./controllers/home.controller");

app.set("view engine","ejs");

app.set("views","./views/templates");

app.use(express.static("public"));

app.all("/",(req,res,next) => {
    homeController.run(req,res,next);
});

app.listen(config.server.port,() => {
    console.log("Server running at port",config.server.port);
});