require("dotenv").config();
const expressSession = require("express-session");
const express = require("express");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const prisma = require("./config/prisma");
const passport = require("passport");
const app = express();

// session
app.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

// require passport config so that app.js knows about it
require("./config/passport");
app.use(passport.session);

app.get("/", (req, res) => {
  res.send("its working");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
