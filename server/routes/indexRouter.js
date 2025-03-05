const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.json("its working");
});

module.exports = indexRouter