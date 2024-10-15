const db = require("../models");
const Athlete = db.athletes;
const Op = db.Sequelize.Op;

//find all athletes
exports.findAll = (req, res) => {
  Athlete.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "An error occurred while retrieving athletes." });
    });
};

//find one athlete by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Athlete.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: "Athlete not found." });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving athlete with id=" + id });
    });
};

//create an athlete
exports.create = (req, res) => {
  const athlete = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    nickname: req.body.nickname,
    dateOfBirth: req.body.dateOfBirth,
    weight: req.body.weight,
    pictureURL: req.body.pictureURL,
    sport: req.body.sport,
    achievements: req.body.achievements,
  };

  Athlete.create(athlete)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the athlete.",
      });
    });
};

//update an athlete by id
exports.update = (req, res) => {
  const id = req.params.id;

  Athlete.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Athlete was updated successfully." });
      } else {
        res.send({ message: `Cannot update athlete with id=${id}.` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating athlete with id=" + id });
    });
};

//delete an athlete by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Athlete.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Athlete was deleted successfully." });
      } else {
        res.send({ message: `Cannot delete athlete with id=${id}.` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error deleting athlete with id=" + id });
    });
};
