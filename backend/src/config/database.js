const mongoose = require("mongoose");


 function connect(){
    try{
        mongoose.set('strictQuery', true);
        mongoose.connect("mongodb://localhost:27017/feedback_gen");
        console.log("Connected to MongoDB")
    }catch(error){
        console.log(error.message)
    }
}

module.exports = connect;