const express = require("express");
const { loginController, registerController } = require("../controllers/user.controller");
const router = express.Router();

// Login Router
router.post("/login", loginController);

// Register Router
router.post("/register", registerController);

module.exports = router;
