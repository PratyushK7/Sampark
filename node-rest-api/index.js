// Imports
const express = require("express");
const app = express();

const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

// Dotenv configured
dotenv.config();

// Mongoose Connected to DB
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB 🍃");
  }
);

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common")); // HTTP request logger middleware for node.js

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend server is running 👌");
});
