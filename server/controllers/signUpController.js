const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { validateUser } = require("../lib/formValidation");

exports.signUpPost = [
  validateUser,
  async (req, res, next) => {
    const errors = validationResult(req);
    const existingUser = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    if (existingUser) {
      errors.errors.push({
        type: "field",
        value: `${req.body.username}`,
        msg: "username already exists",
        path: "username",
      });
    }

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const hashedPwd = await bcrypt.hash(req.body.password, 10);
      await prisma.user.create({
        data: {
          username: req.body.username,
          password: hashedPwd,
        },
      });

      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
];
