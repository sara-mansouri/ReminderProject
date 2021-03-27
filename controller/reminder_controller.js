let database = require("../database");



let remindersController = {
  list: (req, res) => {
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
      date: req.body.date,
      location: req.body.location,
      tags: req.body.tags.split(","),
      tasks: req.body.tasks.split("\n"),
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    console.log(req.params.id);
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
  
    let objIndex = database.cindy.reminders.findIndex((obj => obj.id == req.params.id));
      database.cindy.reminders[objIndex].title= req.body.title;
      database.cindy.reminders[objIndex].description= req.body.description;
      database.cindy.reminders[objIndex].date= req.body.date;
      database.cindy.reminders[objIndex].location= req.body.location;
      database.cindy.reminders[objIndex].tags= req.body.tags.split(",");
      database.cindy.reminders[objIndex].tasks= req.body.tasks.split("\n");
      database.cindy.reminders[objIndex].completed= req.body.completed;
    res.redirect("/reminders");
  },

  delete: (req, res) => {
    // Implement this code
    let objIndex = database.cindy.reminders.findIndex((obj => obj.id == req.params.id));
    database.cindy.reminders.splice(objIndex, 1);
    res.redirect("/reminders");
  },
};


module.exports = remindersController;
