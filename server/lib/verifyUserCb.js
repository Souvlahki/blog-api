const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");

const verifyCallback = async (username, password, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return done(null, false, { message: "Incorrect username" });
    }

    const match = bcrypt.compare(password, user.password);
    if (!match) {
      return done(null, false, { message: "Incorrect password" });
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

module.exports = verifyCallback;
