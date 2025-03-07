require("dotenv").config();
const jwt = require("jsonwebtoken");
const passport = require("passport");

exports.loginPost = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.json({ error: info.message });
    }

    jwt.sign(
      { user },
      process.env.JWT_SECRET,
      { expiresIn: "2min" },
      (err, token) => {
        res.status(201).json({
          token,
        });
      }
    );
  })(req, res, next);
};
