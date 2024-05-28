const GoogleStrategy = require("passport-google-oauth20").Strategy;
const authConfig = require("../config/auth.config");

module.exports = new GoogleStrategy(
  authConfig.google,
  (accessToken, refreshToken, profile, done) => {
    return done(null, { accessToken, refreshToken, profile });
  }
);
