const express = require("express");
const router = require("./user.route");
const mainRouter = express.Router();

mainRouter.use("/user", router);
module.exports = mainRouter;
