const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");
const reminderController = require("../controller/reminder_controller");

// router.get("/", (req, res) => {
//   res.send("welcome");
// });

// router.get("/dashboard", ensureAuthenticated, (req, res) => {
//   res.render("dashboard", {
//     user: req.user,
//   });
// });






router.get("/reminder/new", ensureAuthenticated,  reminderController.new);

router.get("/reminder/:id", ensureAuthenticated,  reminderController.listOne);

router.get("/reminder/:id/edit", ensureAuthenticated,  reminderController.edit);

router.post("/reminder/", ensureAuthenticated,  reminderController.create);

// Implement this yourself
router.post("/reminder/update/:id", ensureAuthenticated,  reminderController.update);

// Implement this yourself
router.post("/reminder/delete/:id", ensureAuthenticated,  reminderController.delete);
module.exports = router;
