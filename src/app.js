//init express
const express = require("express");
const app = express();

const routeConfig = require("./config/route-config.js");
module.exports = app;

routeConfig.init(app);