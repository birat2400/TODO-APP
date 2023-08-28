const express = require("express");
const indexrouter = require("./router");
const { mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
console.log(process.env);

mongoose.connect(process.env_DB_URL).then(() => {
  console.log("DATABASE CONNECTED");
});
app.use((err,req,res,next)=>{
    err=err? err.toString() :"something went wrong";
    res.status(500).json({data:"",msg:err})
});

app.use("/", indexrouter);

app.listen(port, () => {
  console.log(`Application running in port ${port}`);
});
