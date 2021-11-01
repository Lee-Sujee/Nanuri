"use strict";

const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public')); // css 연결

app.set("views", "./views");
app.set("view engine", "ejs");

//라우팅
const route = require("./routes");
app.use("/", route);

module.exports = app;

