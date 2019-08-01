const dotenv = require("dotenv").load();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
// const path = require("path");
const LocalStrategy = require("passport-local").Strategy;
const routes = require("./src/routes");
const User = require("./src/models/User");

const PORT = process.env.PORT || 9000;

const app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(
  session({
    secret: "maciej",
    resave: false,
    saveUninitialized: true
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.NODE_DATABASE, { useNewUrlParser: true });

const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));
conn.once("open", () => {
  console.log("Connected to atlas database!");
  app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
  app.use("/api", routes);
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}
