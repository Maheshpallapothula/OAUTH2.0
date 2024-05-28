// index.js
const express = require("express");
const session = require("express-session");
const passport = require("./app/config/passport")();
const routes = require("./app/routes");
const googleStrategy = require("./app/strategies/google.strategies");
const facebookStrategy = require("./app/strategies/facebook.strategies");
const githubStrategy = require("./app/strategies/github.strategies");
const cors = require("cors");

const app = express();
app.use(cors());

// Load environment variables from .env
require("dotenv").config();

// Middleware setup
app.use(
  session({ secret: "your-secret-key", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

// Include your OAuth strategies here (Google, Facebook, GitHub)
passport.use(googleStrategy);
passport.use(facebookStrategy);
passport.use(githubStrategy);

// Load routes
app.use("/", routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.warn(
    `Server is running on http://localhost:${PORT}
    you can access google config on 
    http://localhost:${PORT}/auth/google
    http://localhost:${PORT}/auth/facebook
    http://localhost:${PORT}/auth/github`
  );
});
