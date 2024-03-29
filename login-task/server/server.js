const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./route/router.js");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

// middleware

app.use(express.json());
app.use(cors());

// route to home

app.get("/", (req, res) => {
  res.send("hello world");
});

// to start a server on port 3000.

// app router
app.use("/api", router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("DB connected successfully and server start on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
