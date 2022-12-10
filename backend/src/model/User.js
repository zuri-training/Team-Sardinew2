const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    full_name:{
        type:String,
        required:[true,'Please Enter Your Full Name'],
        minlength:5,
        maxlength:100
    },
    username:{
        type:String,
        required:[true,'Please Enter Your Username'],
        unique:true,
        minlength:3,
        maxlength:30
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Please Enter Your Username'],
        minlength:5,
        maxlength:100
    },
    password:{
        type:String,
        required:[true,'Please Enter Your Password'],
        minlength:5,
        maxlength:100
    },
    active:{
        type:Boolean,
        default:false,
    },
},
{timestamps:true}
);

const userModel = model ("users", userSchema);  //users = name of DB table
module.exports = userModel;
