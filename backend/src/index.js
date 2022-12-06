const express = require("express");
const connect = require("./config/database");
const cors =require("cors");

connect();  //displays connects status on the console

const app = express();
app.use(cors());  //cors prevents cors error from the front end api

//Testing the app to ensure is running 
app.get("/", (req, res) => {
    res.send("Feedback app is running...")
});

app.listen(5000);
