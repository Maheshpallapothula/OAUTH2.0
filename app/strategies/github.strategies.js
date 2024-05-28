const GitHubStrategy = require("passport-github").Strategy;
const authConfig = require("../config/auth.config");

module.exports = new GitHubStrategy(
  authConfig.github,
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
);
