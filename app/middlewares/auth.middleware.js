const passport = require("passport");

const authenticateGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
  prompt: "consent",
});
const authenticateFacebook = passport.authenticate("facebook", {
  scope: ["email", "user_friends"],
});
const authenticateGitHub = passport.authenticate("github", {
  scope: ["read:user", "user:email"],
});

const authenticateAll = (req, res, next) => {
  const { provider } = req.params;
  console.log("🚀 ~ authenticateAll ~ provider:", provider);

  switch (provider) {
    case "google":
      return authenticateGoogle(req, res, next);
    case "facebook":
      return authenticateFacebook(req, res, next);
    case "github":
      return authenticateGitHub(req, res, next);
    default:
      return res.status(400).send("Invalid authentication provider.");
  }
};

module.exports = {
  authenticateGoogle,
  authenticateFacebook,
  authenticateGitHub,
  authenticateAll,
};
