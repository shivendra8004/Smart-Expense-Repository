const express = require("express");
const { loginController, registerController } = require("../controllers/user.controller");
const router = express.Router();

// Login Router
router.get("/login", (req, res) => {
  res.send("Router working properly");
});
router.post("/login", loginController);

// Register Router
router.post("/register", registerController);

module.exports = router;
