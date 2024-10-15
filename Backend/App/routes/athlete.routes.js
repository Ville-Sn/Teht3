module.exports = (app) => {
  const athletes = require("../controllers/Athlete.controller.js");

  var router = require("express").Router();

  //get all athletes
  router.get("/", athletes.findAll);

  //get one athlete
  router.get("/:id", athletes.findOne);

  //create a new athlete
  router.post("/", athletes.create);

  //update athlete
  router.put("/:id", athletes.update);

  //delete athlete
  router.delete("/:id", athletes.delete);

  //default route?
  app.use("/api", router);
};
