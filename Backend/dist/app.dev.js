"use strict";

var express = require("express");

var cors = require("cors");

var app = express();
var port = 3005; //cors options

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token",
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); //routes

require("./App/routes/athlete.routes.js")(app); //db synchronization


var db = require("./App/models");

db.sequelize.sync().then(function () {
  console.log("Db synced.");
  app.listen(port, function () {
    console.log("Server is running on port :" + port);
  });
})["catch"](function (err) {
  console.log("Failed to sync db: ", err.message);
});