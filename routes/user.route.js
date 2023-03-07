const express = require("express");
const { loginController, registerController } = require("../controllers/user.controller");
const userRouter = express.Router();

// Login Router
userRouter.post("/login", loginController);
// Register Router
userRouter.post("/register", registerController);

module.exports = userRouter;
