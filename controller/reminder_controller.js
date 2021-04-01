let database = require("../database");
const fetch = require("node-fetch");
require('dotenv').config()










let remindersController = {
  list: (req, res) => {
    console.log(req.user);
    const client_id = process.env.CLIENT_ID;
    fetch("https://api.unsplash.com/photos/?client_id=hLoLdbTS_-5c1SRfP7p9T6Y79jbgXmrqjFxcr2WF9zk").then(photos => photos.json().then(parsedPhotos => {
      //console.log(parsedPhotos)
      console.log(parsedPhotos[req.user.id].urls.regular)
      var picture = parsedPhotos[req.user.id].urls.regular


    }));
    res.render("reminder/index", {
      reminders: database

      //[req.user.id].reminders 
    });

  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  // const getRandomNum = () => {
  //   return Math.floor(Math.random() * 99);
  // };

  listOne: async (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database[req.user.id].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });

    const client_id = process.env.CLIENT_ID;
    const photos = await fetch("https://api.unsplash.com/photos/?client_id=hLoLdbTS_-5c1SRfP7p9T6Y79jbgXmrqjFxcr2WF9zk")

    const parsedPhotos = await photos.json()
    const photo = parsedPhotos[req.params.id].urls.regular


    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult, picture: photo });
    } else {
      res.render("reminder/index", { reminders: database[req.user.id].reminders });
    }


    // parsedPhotos.urls.raw[req.user.id]
    // console.log(parsedPhotos.urls.raw[req.user.id])  
  },

  getUserReminder: async (req, res) => {
    let reminderToFind = req.params.user_id;
    let searchResult = database[reminderToFind];

    const client_id = process.env.CLIENT_ID;
    const photos = await fetch("https://api.unsplash.com/photos/?client_id=hLoLdbTS_-5c1SRfP7p9T6Y79jbgXmrqjFxcr2WF9zk")

    const parsedPhotos = await photos.json()
    const photo = parsedPhotos[req.params.user_id].urls.regular

    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult, picture: photo });
    } else {
      res.render("reminder/index", { reminders: database[req.user.id].reminders });
    }
  },

  create: (req, res) => {
    console.log(req.body)
    console.log("xx", req.user);

    const taskLists = req.body.tasks.split('\r\n')


    let reminder = {
      id: database[req.user.id].reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      tasks: taskLists,
      completed: false,
      date: req.body.date,
      location: req.body.location,
      tags: [req.body.tags]

    };
    database[req.user.id].reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database[req.user.id].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: async (req, res) => {
    let reminderToFind = req.params.id;
    const { title, description, completed } = req.body

    let searchResult = database[req.user.id].reminders.find(function (reminder) {
      console.log(reminder.id, reminderToFind)
      return reminder.id == reminderToFind;
    });
    //searchResult = req.body

    searchResult.title = title;
    searchResult.description = description;
    searchResult.completed = completed;


    database[req.user.id].reminders[parseInt(reminderToFind) - 1] = searchResult
    const client_id = process.env.CLIENT_ID;
    const photos = await fetch("https://api.unsplash.com/photos/?client_id=hLoLdbTS_-5c1SRfP7p9T6Y79jbgXmrqjFxcr2WF9zk")

    const parsedPhotos = await photos.json()
    const photo = parsedPhotos[req.params.id].urls.regular


    res.render("reminder/single-reminder", { reminderItem: searchResult, picture: photo });
  },

  delete: (req, res) => {
    // Implement this code
    let objIndex = database[req.user.id].reminders.findIndex((obj => obj.id == req.params.id));
    database[req.user.id].reminders.splice(objIndex, 1);
    res.redirect("/reminders");
  },


  // delete: (req, res) => {
  //   let reminderToFind = req.params.id;
  //   let searchResult = database[req.user.id].reminders.find(function (reminder) {
  //     return reminder.id == reminderToFind;
  //   });
  //   // res.render("reminder/delete/", { reminderItem: searchResult });
  //   delete reminderItem[searchResult];
  //   //delete database.Database[req.user.id].reminders.[id];
  // },
};

module.exports = remindersController;
