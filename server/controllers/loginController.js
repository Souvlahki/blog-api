const passport = require("passport");
exports.loginPost = (req, res) => {
  res.status(201).json({
    message: "Login successful",
    user: req.user,
  });
};
