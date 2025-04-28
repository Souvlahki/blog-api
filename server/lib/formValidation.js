const { body } = require("express-validator");

const alphaErr = "must only contian letters.";
const passwordLengthErr = "must be between 10-20 characters";
const usernameLengthErr = "must be between 8-20 characters";

const validateUser = [
  body("username")
    .trim()
    .isAlpha()
    .withMessage(`username ${alphaErr}`)
    .isLength({ min: 8, max: 20 })
    .withMessage(`username ${usernameLengthErr}`),
  body("password")
    .trim()
    .isLength({ min: 10, max: 20 })
    .withMessage(`password ${passwordLengthErr}`),
];

module.exports = { validateUser };
