var express = require(`express`);
var log = require(`morgan`);
var cookie = require(`cookie-parser`);

var app = express();

app.use(logger(`dev`));
