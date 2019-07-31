const mongoose = require("mongoose");
require("../models/Climb");

const Climb = mongoose.model("climbs");

const climb = {
  addClimb: async (req, res) => {
    const newClimbContent = {
      name: req.body.name,
      grade: req.body.grade,
      date: req.body.date,
      location: req.body.location,
      crag: req.body.crag,
      type: req.body.type,
      rating: req.body.rating,
      description: req.body.description,
      userID: req.body.userID
    };

    try {
      const newClimb = await new Climb(newClimbContent).save((err, climb) => {
        res.send(climb);
      });
      console.log("Climb saved:", newClimb);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getAllClimbs: (req, res) => {
    console.log(req);
    Climb.find({ userID: req.query.userID })
      .then(results => res.send(results))
      .catch(err => console.log(err));
  },
  getSingleClimb: (req, res) => {
    Climb.findById(req.params.id)
      .then(results => {
        if (!results) {
          res.send(404);
        } else {
          res.send(results);
        }
      })
      .catch(err => res.send(404));
  },
  updateClimb: (req, res) => {
    const updatedClimbContent = {
      name: req.body.name,
      grade: req.body.grade,
      date: req.body.date,
      location: req.body.location,
      crag: req.body.crag,
      type: req.body.type,
      rating: req.body.rating,
      description: req.body.description
    };
    Climb.findByIdAndUpdate(req.params.id, updatedClimbContent)
      .then(updatedClimb => res.send(updatedClimb))
      .catch(err => console.log(err));
  },
  deleteClimb: (req, res) => {
    Climb.findByIdAndDelete(req.params.id)
      .then(result => {
        if (!result) {
          res.sendStatus(404);
        } else {
          res.sendStatus(200);
        }
      })
      .catch(err => res.sendStatus(500));
  }
};

module.exports = climb;
