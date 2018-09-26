const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/index");

app.set("view-engine","ejs");