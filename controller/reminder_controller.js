let database = require("../database");
const fetch = require("node-fetch");
require('dotenv').config()










let remindersController = {
  list: (req, res) => {
    const client_id = process.env.CLIENT_ID;
    fetch("https://api.unsplash.com/photos/?client_id=hLoLdbTS_-5c1SRfP7p9T6Y79jbgXmrqjFxcr2WF9zk").then(photos => photos.json().then(parsedPhotos => {
      //console.log(parsedPhotos)
      console.log(parsedPhotos[1].urls.regular)
      var picture = parsedPhotos[1].urls.regular


    }));
    res.render("reminder/index", { reminders: database.cindy.reminders });

  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  // const getRandomNum = () => {
  //   return Math.floor(Math.random() * 99);
  // };

  listOne: async (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });

    const client_id = process.env.CLIENT_ID;
    const photos = await fetch("https://api.unsplash.com/photos/?client_id=hLoLdbTS_-5c1SRfP7p9T6Y79jbgXmrqjFxcr2WF9zk")

    const parsedPhotos = await photos.json()
    const photo = parsedPhotos[req.params.id].urls.regular


    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult, picture: photo });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }


    // parsedPhotos.urls.raw[1]
    // console.log(parsedPhotos.urls.raw[1])
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

  update: async (req, res) => {
    let reminderToFind = req.params.id;
    const { title, description, completed } = req.body

    let searchResult = database.cindy.reminders.find(function (reminder) {
      console.log(reminder.id, reminderToFind)
      return reminder.id == reminderToFind;
    });
    //searchResult = req.body

    searchResult.title = title;
    searchResult.description = description;
    searchResult.completed = completed;


    database.cindy.reminders[parseInt(reminderToFind) - 1] = searchResult
    const client_id = process.env.CLIENT_ID;
    const photos = await fetch("https://api.unsplash.com/photos/?client_id=hLoLdbTS_-5c1SRfP7p9T6Y79jbgXmrqjFxcr2WF9zk")

    const parsedPhotos = await photos.json()
    const photo = parsedPhotos[req.params.id].urls.regular


    res.render("reminder/single-reminder", { reminderItem: searchResult, picture: photo });
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
