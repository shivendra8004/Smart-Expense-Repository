const express = require("express");
const userRouter = require("./user.route");
const mainRouter = express.Router();
mainRouter.get("/", (req, res) => {
  res.send("Default Response");
});
mainRouter.use("/users", userRouter);
module.exports = mainRouter;
