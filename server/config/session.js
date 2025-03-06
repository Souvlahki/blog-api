const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const prisma = require("./prisma");
const expressSession = require("express-session");

const COOKIE_AGE =  10 * 1000;

module.exports = expressSession({
  cookie: {
    maxAge: COOKIE_AGE,
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
