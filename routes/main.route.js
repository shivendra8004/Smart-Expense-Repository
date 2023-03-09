const express = require("express");
const userRouter = require("./user.route");
const transactionRouter = require("./transaction.route");
const mainRouter = express.Router();
mainRouter.get("/", (req, res) => {
  res.send("Default Response");
});
mainRouter.use("/users", userRouter);
mainRouter.use("/transactions", transactionRouter);
module.exports = mainRouter;
