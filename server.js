const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/connectDB");
const mainRouter = require("./routes/main.route");
const path = require("path");
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
app.use("/api/v1", mainRouter);

// // Static Files
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function () {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// Port Variable
const PORT = 5500 || process.env.PORT;
// Listening
app.listen(PORT, () => {
  console.log(`Server Started Listening on Port ${PORT}`.bgCyan);
});
