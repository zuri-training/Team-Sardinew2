const express = require("express");
const cors = require("cors");
const userRoute = require("./src/router/userRoutes");
const feedbackRouter = require("./src/router/formRoutes");

const app = express();

app.use(express.json()); ////middleware to help get data from postman in json form
app.use(cors()); //cors prevents cors error from the front end api
app.use(express.urlencoded({ extended: true }));

//call app routes here
app.use("/user", userRoute);
app.use("/feedback", feedbackRouter);

//Testing the app to ensure is running
app.get("/", (req, res) => {
  res.send("Feedback app is running...");
});

module.exports = app;
