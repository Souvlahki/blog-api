require("dotenv").config();
const jwt = require("jsonwebtoken");
const passport = require("passport");
exports.loginPost = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
      res.status(201).json({
        user,
        token,
      });
    });
  })(req, res, next);
};
