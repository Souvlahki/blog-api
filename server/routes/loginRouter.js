const { Router } = require("express");
const loginController = require("../controllers/loginController");
const loginRouter = Router();

loginRouter.post("/", loginController.loginPost);

module.exports = loginRouter;
