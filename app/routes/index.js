const express = require("express");
const authRoutes = require("./auth.routes");
const authMiddleware = require("../middlewares/auth.middleware");
const authService = require("../services/auth.service");

const router = express.Router();

router.use("/auth", authRoutes);

router.get(
  "/:provider/redirect",
  authMiddleware.authenticateAll,
  authService.handleCallback
);

module.exports = router;
