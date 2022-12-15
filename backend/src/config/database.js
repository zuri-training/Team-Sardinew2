const mongoose = require("mongoose");
const {config} = require('dotenv');
config();

function connect(uri){
    try{
        mongoose.set('strictQuery', true);
        mongoose.connect(uri || process.env.MONGO_DB_LOCAL)
        console.log("Connected to MondoDB")
    }catch(error){
        console.log(error.message)
    }
}

module.exports = connect;
