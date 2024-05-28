// routes/auth.routes.js
const express = require("express");
const passport = require("passport");
const authMiddleware = require("../middlewares/auth.middleware");
const authService = require("../services/auth.service");

const router = express.Router();

// Correct usage with a callback function
router.get("/google", authMiddleware.authenticateGoogle, (req, res) => {
  // Handle the callback logic if needed
  res.send("Google Authentication Successful");
});

// Correct usage with a callback function
router.get("/facebook", authMiddleware.authenticateFacebook, (req, res) => {
  // Handle the callback logic if needed
  res.send("Facebook Authentication Successful");
});

// Correct usage with a callback function
router.get("/github", authMiddleware.authenticateGitHub, (req, res) => {
  // Handle the callback logic if needed
  res.send("GitHub Authentication Successful");
});

// all the callbacks are provided here (google/facebook/github)
router.get(
  "/:provider/redirect",
  authMiddleware.authenticateAll,
  authService.handleCallback
);

router.get("/:provider/revokeToken/:token", authService.revokeToken);

module.exports = router;
