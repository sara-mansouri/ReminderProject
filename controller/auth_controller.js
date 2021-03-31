let database = require("../database");


let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    // implement
    console.log("REs ----", res);
    const email = res.email;
    res.render("auth/reminders");
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
