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
    const { email, password } = req.body
    console.log(email)
    console.log(database)
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
