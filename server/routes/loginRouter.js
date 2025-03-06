const { Router } = require("express");
const passport = require("passport");
const loginController = require("../controllers/loginController")
const loginRouter = Router();

loginRouter.post("/", passport.authenticate("local"), loginController.loginPost);

module.exports = loginRouter;
