const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");

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
const PORT = 3000 || process.env.PORT;
// Listening
app.listen(PORT, () => {
  console.log(`Server Started Listening on Port ${PORT}`);
});
