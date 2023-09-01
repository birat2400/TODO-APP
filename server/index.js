require("dotenv").config();
console.log(process.env);

const express = require("express");
const mongoose = require("mongoose");

const indexrouter = require("./router");
const app = express();

const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/todo_app";

mongoose.connect(DB_URL).then(() => {
  console.log("DATABASE CONNECTED");
});

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong";
  res.status(500).json({ data: "", msg: err });
});

app.use("/", indexrouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Application running in port ${port}`);
})
