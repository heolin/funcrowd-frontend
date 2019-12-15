"use strict";

var express = require('express');

var os = require('os');

var app = express();
app.use(express["static"]('dist'));
app.listen(process.env.PORT || 8080, function () {
  return console.log("Listening on port ".concat(process.env.PORT || 8080, "!"));
});