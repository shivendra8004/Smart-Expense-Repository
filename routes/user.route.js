const express = require("express");
const { loginController, registerController } = require("../controllers/user.controller");
const router = express.Router();

// Login Router
router.post("/login", loginController);
// Test Roter
router.get("/", (req, res) => {
  res.send("User route working");
});
// Register Router
router.post("/register", registerController);

module.exports = router;
