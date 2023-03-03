const userModel = require("../models/user.model");
// Controllers
const loginController = async (req, res) => {
  try {
    res.send("Login");
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const registerController = async () => {};

module.exports = {
  loginController,
  registerController,
};
