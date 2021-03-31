const express = require("express");
const passport = require("../middleware/passport");
const usercontroller = require("../controller/userController");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

router.post(
  "/login",
  // (req, res) =>  console.log(req.body)
  passport.authenticate("local", {
    successRedirect: "/reminders",
    failureRedirect: "/auth/login",
  })
);

router.get("/register", forwardAuthenticated, (req, res) => res.render("register"));

// app.post("/reminder/", reminderController.create);
router.post("/register",  usercontroller.createuser);
  // passport.authenticate("local", {
  //   successRedirect: "/dashboard",
  //   failureRedirect: "/auth/register",
  // }),
// );

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;
