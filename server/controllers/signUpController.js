const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");

exports.signUpPost = async (req, res, next) => {
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, 10);
    await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPwd,
      },
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
