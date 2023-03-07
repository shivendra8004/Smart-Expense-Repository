const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/connectDB");
const mainRouter = require("./routes/main.route");
// Database Connecting
connectDB();
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
app.use("/api/v1", mainRouter);

// Port Variable
const PORT = process.env.PORT || 5500;
// Listening
app.listen(PORT, () => {
  console.log(`Server Started Listening on Port ${PORT}`.bgCyan);
});
