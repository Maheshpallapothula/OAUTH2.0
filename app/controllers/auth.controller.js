module.exports = {
  handleGoogleCallback: (req, res) => {
    const { user } = req;
    // Handle the user object as needed (e.g., store in the database)
    res.redirect("/");
  },

  handleFacebookCallback: (req, res) => {
    const { user } = req;
    // Handle the user object as needed (e.g., store in the database)
    res.redirect("/");
  },

  handleGithubCallback: (req, res) => {
    const { user } = req;
    // Handle the user object as needed (e.g., store in the database)
    res.redirect("/");
  },
};
