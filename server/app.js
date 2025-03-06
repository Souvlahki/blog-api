require("dotenv").config();
const express = require("express");
const app = express();

// require cors config for client communication
const corsConfig = require("./config/corsConfig");
app.use(corsConfig);

// require passport and session configs
const passport = require("passport");
const expressSession = require("./config/session");
app.use(expressSession);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require passport config so that app.js knows about it
require("./config/passport");
app.use(passport.session());

// require routes
const routes = require("./routes/index");
app.use("/sign-up", routes.signUpRouter);
app.use("/login", routes.loginRouter);

app.use("*", (err, req, res, next) => {
  console.log(err);
});
  
app.listen(3000, () => {
  console.log("listening to port 3000");
});
