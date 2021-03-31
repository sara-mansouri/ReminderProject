const userModel = require("../models/userModel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};
const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

function isUserValid(user, password) {
  return user.password === password;
}

let database = require("../models/userModel").database;
const fetch = require("node-fetch");
require('dotenv').config()

function createuser(req, res) {
  console.log(database);
  console.log(req);
  let newuser = {
    id: database.length + 1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  database.push(newuser);
  console.log(database);
  res.redirect("login");
}
module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
  createuser
};
