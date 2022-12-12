const express = require("express");
const connect = require("./config/database");

const {json} = require("express");

// const user = require("./router/userRoutes");
const templateForm = require("./router/templateFormRoutes");
const cors =require("cors");

connect();  //displays connects status on the console

const app = express();
app.use(cors());  //cors prevents cors error from the front end api
app.use(json());
// app.use("/user",user);
app.use("/templateForm",templateForm);


//Testing the app to ensure is running 
app.get("/", (req, res) => {
    res.send("Feedback app is running...")
});

app.listen(5000, () => {
    console.log("server is running on port 5000")
});









// const express = require("express");
// const connect = require("./config/database");
// const cors =require("cors");
// const userRoute = require("./router/userRoutes");
// const responseRoute = require("./router/responseRoutes");
// connect();  //displays connects status on the console

// const app = express();

// const PORT = process.env.PORT || 5000;  //call port from .env 

// app.use(express.json());  ////middleware to help get data from postman in json form
// app.use(cors());  //cors prevents cors error from the front end api

// //call app routes here
// app.use('/user', userRoute);
// app.use('/response', responseRoute);

// //Testing the app to ensure is running 
// app.get("/", (req, res) => {
//     res.send("Feedback app is running...")
// });

// app.listen(PORT, () => { // server listening 
//     console.log(`Server running on port ${PORT}`);
//   });

