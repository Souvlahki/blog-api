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

    const payload = { id: user.id, username: user.username };

    // assign the payload with userId and username generate the token after
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
      (err, token) => {
        res.status(201).json({
          token,
        });
      }
    );
  })(req, res, next);
};
