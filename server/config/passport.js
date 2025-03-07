require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const verifyCallback = require("../lib/verifyUserCb");
const { verifyJwt } = require("../lib/verifyJwtCb");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const local = new LocalStrategy(verifyCallback);
const jwt = new JwtStrategy(opts, verifyJwt);
passport.use(local);
passport.use(jwt);
