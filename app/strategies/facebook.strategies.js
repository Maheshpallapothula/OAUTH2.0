const FacebookStrategy = require("passport-facebook").Strategy;
const authConfig = require("../config/auth.config");

module.exports = new FacebookStrategy(
  authConfig.facebook,
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
);
