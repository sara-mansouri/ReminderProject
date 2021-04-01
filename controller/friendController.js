const { database } = require("../models/userModel")
let friendController = {
  fetchAll: (req, res) => {
    res.render("friends", {
      possibleFriends: database
    })
  }
}

module.exports = friendController