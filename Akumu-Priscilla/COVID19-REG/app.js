const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
require("dotenv").config();

// start expressSession
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

// requiring routes

const registerRoutes = require("./routes/registerRoutes");


const app = express();

const config = require("./config/database");
mongoose.connect(config.database, { useNewUrlParser: true });

// const Register = require("./models/Register");

const db = mongoose.connection;

db.once("open", function () {
  console.log("Connected to MongoDB");
});

db.on("error", function (err) {
  console.error(err);
});

// views settings or configurations
app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

//to access static files the server checks the public folder
app.use(express.static(path.join(__dirname, "public")));
// setting the sessions
app.use(expressSession);
//initiazing passport and they shd be like this
// constantly they  are methods(line 43-44)

//middleware
app.use(passport.initialize());
app.use(passport.session());

// passport.use(Signup.createStrategy());
// passport.serializeUser(Signup.serializeUser());
// passport.deserializeUser(Signup.deserializeUser());

// giving route a path
// app.use("/", landingRoutes);

app.use("/", registerRoutes);


app.get("*", (req, res) => {
  // res.status(404).send('Sorry, we have hit a dead end here. GO BACK');
  res.status(404).send("pageNotFound");
});

// server
app.listen(4000, () => console.log("Listening on Port 4000"));
