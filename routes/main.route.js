const express = require("express");
const router = require("./user.route");
const mainRouter = express.Router();
mainRouter.get("/", (req, res) => {
  res.send("Default Response");
});
mainRouter.use("/user", router);
module.exports = mainRouter;
