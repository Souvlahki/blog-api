const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const prisma = require("./prisma");
const expressSession = require("express-session");

module.exports = expressSession({
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new PrismaSessionStore(prisma, {
    checkPeriod: 2 * 60 * 1000,
    dbRecordIdIsSessionId: true,
    dbRecordIdFunction: undefined,
  }),
});
