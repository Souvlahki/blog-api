const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("its working");
});

indexRouter.get("/login", (req, res) => {});
indexRouter.post("/login")