const jwt = require("jsonwebtoken");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const handleCallback = async (req, res) => {
  try {
    const provider = req.params.provider;
    if (provider === "google") {
      const { user } = req;

      const { id, displayName, emails, photos } = user.profile;
      const { accessToken, refreshToken } = user;

      // Handle the user object as needed (e.g., store in the database)
      res.json({
        id,
        displayName,
        emails,
        accessToken,
        refreshToken,
      });
    } else if (provider === "facebook") {
      res.json({
        message: "Facebook",
      });
    } else if (provider === "github") {
      res.json({
        message: "Facebook",
      });
    }
  } catch (error) {
    console.error("Error in handleCallback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const revokeToken = async (req, res) => {
  try {
    const token = req.params.token;

    const url = `${process.env.GOOGLE_URL}/o/oauth2/revoke?token=${token}`;
    const response = await axios.get(url);

    if (response?.status === 200) {
      res.status(200).send({
        isOk: true,
        message: "Token revoked successfully",
      });
    } else {
      res.status(404).send({ message: "Token not revoked" });
    }
  } catch (error) {
    console.error("Error in revokeToken:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  handleCallback,
  revokeToken,
};
