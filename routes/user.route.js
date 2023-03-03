const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

// Post Router
router.post("/login", userController);

module.exports = router;
