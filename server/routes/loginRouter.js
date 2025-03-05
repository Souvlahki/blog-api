const { Router } = require("express");
const passport = require("passport");
const loginRouter = Router();

loginRouter.post("/", passport.authenticate("local"));

module.exports = loginRouter;
