let database = require("../database");
const fetch = require("node-fetch");
var fs = require('fs')

let remindersController = {
  list: (req, res) => {
    const client_id = process.env.CLIENT_ID;
    fetch("https://api.unsplash.com/search/photos?client_id=${client_id}query=cats").then(photos => photos.json().then(parsedPhotos => {
      console.log(parsedPhotos)
    }));
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit/", { reminderItem: searchResult });
  },

  delete: (req, res) => {
    // Implement this code
    let objIndex = database.cindy.reminders.findIndex((obj => obj.id == req.params.id));
    database.cindy.reminders.splice(objIndex, 1);
    res.redirect("/reminders");
  },


  // delete: (req, res) => {
  //   let reminderToFind = req.params.id;
  //   let searchResult = database.cindy.reminders.find(function (reminder) {
  //     return reminder.id == reminderToFind;
  //   });
  //   // res.render("reminder/delete/", { reminderItem: searchResult });
  //   delete reminderItem[searchResult];
  //   //delete database.Database.cindy.reminders.[id];
  // },


};

module.exports = remindersController;
