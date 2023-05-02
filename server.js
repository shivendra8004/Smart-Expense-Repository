const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const mainRouter = require("./routes/main.route");
const path = require("path");
// Port No.
const PORT = 5500 || process.env.PORT;
// Database Connecting
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Started Listening on Port ${PORT}`.bgCyan);
  });
});

// Configuring env file
dotenv.config();
// Rest Object
const app = express();
// Third Party Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// Routes and Middlewares
app.use("/api/v1", mainRouter);
