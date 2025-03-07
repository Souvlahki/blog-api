const prisma = require("../config/prisma");

async function verifyJwt(jwtPayload, done) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: jwtPayload.id,
      },
    });

    if (!user) return done(null, false);

    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}

module.exports = { verifyJwt };
