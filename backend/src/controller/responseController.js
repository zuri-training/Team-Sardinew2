const {trusted} = require('mongoose');
const User = require("../model/User");
const bcrypt = require('bcryptjs');
const bycrypt = require('bcryptjs');
const Jwt = require('jsonwebtoken');
const jwtKey = "feedback_gen";
const auth = require('../middleware/auth');  //this will be used here


//get all users from users table
exports.getAllResponse = async (req, res) =>{
    try{
        let users = await User.find();
        if(users.length === 0){
            return res.status(404).json({success:false, message:'No User was Found' });
        }
        res.status(200).json({success:true, message:"Users Found", data:users });
    }catch(error){
        res.status(500).json({success:false, message:'Internal Server Error', error: error.message});
    }
}

exports.getResponseById = async (req, res) =>{
    try{
        let id = {_id:req.params.id};
        let user = await User.findOne(id);
        if(!user){
            return res.status(404).json({success:false, message:"User not Found in the DB!"});
        }
        return res.status(200).json({success:true, message:"User Found!", data:user});
    }catch(error){
        res.status(500).json({success:false, message:"Internal Server Error", error: error.message});
    }
}

exports.addResponse = async (req, res) =>{
    try{
        const {full_name, username, email, password} = req.body; //get user input

        if(!(full_name && username && email && password)){ //validate user input
            res.status(400).json({success:false, message:"All input is required!"});
        }

        const checkUser = await User.findOne({email}); //Validate if user already exists in the DB
        if(checkUser){
            return res.status(409).json({success:false, message:"User with this Email Exist. Please Login!"});
        }

        encryptedPassword = await bcrypt.hash(password, 10);  //encyrpt user password
        const user = await User.create({   //save user in the DB
            full_name,
            username,
            email: email.toLowerCase(), //convert email to lowercase
            password:encryptedPassword,
        });

        if(user){
            result = user.toObject();  //remove the password from saving in session or returning
            delete result.password;

            Jwt.sign({result}, jwtKey, {expiresIn:"2h"} , (err, token) => {  //create token
                if(err){
                    res.status(500).json({success:false, message: "Something went wrong, please try after sometime", error: err.message});
                }
                return res.status(201).json({success:true, message: "User Created Successfully", data:result, auth: token});
            });
        }else{
            return res.status(400).json({success:false, message:"User creation failed!"});
        }
    }catch(error){
        res.status(500).json({success:false, message: "Internal Server Error", error: error.message});
    }
}

exports.updateResponse = async (req, res) =>{
    try{
        let id = {_id: req.params.id};
        let user = await req.body;
        let result = await User.findOneAndUpdate(id, user, {new:true});
        
        //remove the password from saving in session or returning
        result = result.toObject();
        delete result.password;
        if(!result){
            return res.status(400).json({success:false, message:"User failed to Update!"});
        }
        return res.status(200).json({success:true, message: "User Updated Successfully", data:result});
    }catch(error){
        res.status(500).json({success:false, message: "Error occurred while trying to Update User", error: error.message});
    }
}

exports.deleteResponse = async (req, res) =>{
    try{
        let id = {_id: req.params.id};
        let result = await User.findOneAndRemove(id);
        if(!result){
            return res.status(400).json({success:false, message:"Attempt to delete User failed!"});
        }
        return res.status(200).json({success:true, message: "User deleted Successfully", data:result});
    }catch(error){
        res.status(500).json({success:false, message: "Error occurred while trying to delete", error: error.message});
    }
}


//download

//export