const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClimbSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  crag: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  userID: {
    type: String,
    required: true
  }
});

mongoose.model("climbs", ClimbSchema);
