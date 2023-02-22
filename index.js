const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
// Configuring env file
dotenv.config();
// Rest Object
const app = express();
// Third Party Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// Routes and Middlewares
app.get("/", (req, res) => {
  res.send("Working Properly");
});

// Port Variable
const PORT = process.env.PORT || 3000;
// Listening
app.listen(PORT, () => {
  console.log(`Server Started Listening on Port ${PORT}`);
});
