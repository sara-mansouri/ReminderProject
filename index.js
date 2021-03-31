const express = require("express");
const app = express();
const path = require("path");
const expressSession = require('express-session');
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const port = process.env.PORT || 3001;
const passport = require("./middleware/passport")
//Jennifer adding comment for commit

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);

app.set("view engine", "ejs");

app.use(expressSession({ secret: 'anything' }));

app.use(passport.initialize());
app.use(passport.session());

// Routes start here

app.get("/reminders", reminderController.list);

app.get("/reminder/new", reminderController.new);

app.get("/reminder/:id", reminderController.listOne);

app.get("/reminder/:id/edit", reminderController.edit);

app.get("/userreminder/:user_id", reminderController.getUserReminder);

app.post("/reminder/", reminderController.create);

// Implement this yourself
app.post("/reminder/update/:id", reminderController.update);

// Implement this yourself
app.post("/reminder/delete/:id", reminderController.delete);

// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
app.get("/register", authController.register);
app.get("/login", authController.login);
app.post("/register", authController.registerSubmit);
app.post("/login", passport.authenticate('local', { failureRedirect: 'login' }),
  function (req, res) {
    res.redirect('/reminders');
  });

app.listen(port, function () {
  console.log(
    "Server running. Visit: localhost:3001/reminders in your browser 🚀"
  );
});
