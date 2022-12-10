const {trusted} = require('mongoose');
const User = require("../model/User");
const Token = require('../model/Token');  //token model for reseting password
const bcrypt = require('bcryptjs');  //for encyrpting password 
const bycrypt = require('bcryptjs'); //for decrypting password
const crypto = require('crypto');   //for generating random number for token
const Jwt = require('jsonwebtoken'); //for jwt auth
const jwtKey = "feedback_gen";
const auth = require('../middleware/auth');
const sendEmail = require('../middleware/email'); //for email
const nodemailer = require('nodemailer');   //for sending mail

//get all users from users table
exports.getAllUsers = async (req, res) =>{
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

exports.getUserById = async (req, res) =>{
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

exports.addUser = async (req, res) =>{
    try{
        const { name, email, password} = req.body; //get user input

        if(!(name && email && password)){ //validate user input
            res.status(400).json({success:false, message:"All input is required!"});
        }

        const checkUser = await User.findOne({email}); //Validate if user already exists in the DB
        if(checkUser){
            return res.status(409).json({success:false, message:"User with this Email Exist. Please Login!"});
        }

        encryptedPassword = await bcrypt.hash(password, 10);  //encyrpt user password
        const user = await User.create({   //save user in the DB
            name,
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
                ///send email
                let fname = user.name.split(" ")[0];
                let htmlContent = "<h1 style='font:bold;'><strong>FeedBack Gen</strong></h1>"
                htmlContent += `<p>Hi, ${fname} </p>`
                htmlContent += "<p>You'registration to feedback Generator.</p>"
                htmlContent += "<p>was successful, Login to start exploring mouth watering offers.</p>"  
                htmlContent += "<p>See you inside!</p>"
                htmlContent += "<p><Regards,</p>"
                htmlContent += "<p>Sardinew2 Team</p>"

                sendEmail(user.email, "Feedback Gen Successful Registration", htmlContent);
                return res.status(201).json({success:true, message: "User Created Successfully", data:result, auth: token});
            });
        }else{
            return res.status(400).json({success:false, message:"User creation failed!"});
        }
    }catch(error){
        res.status(500).json({success:false, message: "Internal Server Error", error: error.message});
    }
}

exports.updateUser = async (req, res) =>{
    try{
        let id = {_id: req.params.id};
        const { name, email} = req.body; //get user input

        if(!(name && email)){ //validate user input
            res.status(400).json({success:false, message:"All input is required!"});
        }

        const checkUser = await User.findOne({email}); //Validate if user already exists in the DB
        if(!checkUser){
            return res.status(409).json({success:false, message:"User with this Email doesnt Exist. enter a valid email!"});
        }

       let newUser = {}
       newUser.name = req.body.name
       //newUser.password = await bcrypt.hash(req.body.password, 10);  //encyrpt user password  no need to update password

        let user = await User.findOneAndUpdate(id, newUser, {new:true});
        //remove the password from saving in session or returning
        result = user.toObject();
        delete result.password;
        if(!result){
            return res.status(400).json({success:false, message:"User failed to Update!"});
        }
        return res.status(200).json({success:true, message: "User Updated Successfully", data:result});
    }catch(error){
        res.status(500).json({success:false, message: "Error occurred while trying to Update User", error: error.message});
    }
}

exports.deleteUser = async (req, res) =>{
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


//Login Controller
exports.login = async (req, res)=>{
    try{
        const {email, password} = req.body; //get user details
        if(!(email && password)){  //validate user input
            res.status(400).json({success:false, message:"Email and Password are required!"});
        }

        const user = await User.findOne({email});  //check if user exists

        if(user && (await bycrypt.compare(password, user.password))){  //validate and compare the two passwords
                result = user.toObject();  //remove the password from saving in session or returning
                delete result.password;

                Jwt.sign({result}, jwtKey, {expiresIn:"2h"} , (err, token) => {
                    if(err){
                        res.status(500).json({success:false, message: "Something went wrong, please try after sometime", error: err.message});
                    }
                    return res.status(200).json({success:true, message: "User Logged in Successfully", data: result, auth: token});
                });
        }else{
            return res.status(404).json({success:false, message:"Invalid Credential!"});
        }  
    }catch(error){
        res.status(501).json({success:false, message:"Internal Server error", error: error.message});

    }
}


//Forgot password and send email link
exports.forgotPassword = async (req, res)=>{
    try{
        const { email } = req.body; //get email input
        if(!email){ //validate email input
            res.status(400).json({success:false, message:"Email is required!"});
        }
       
        const user = await User.findOne({email}); //Validate if user already exists in the DB
        if(!user){
            return res.status(409).json({success:false, message:"User with given Email doesn't exist!"});
        }

        let token = await Token.findOne({userId: user._id});  //check if userId exist in token, in user table id = _id 
        if(!token){
            token = await new Token({
                userId:user._id,
                token:crypto.randomBytes(32).toString("hex")
            }).save();
        }
        
        let name = user.name.split(" ")[0];
        const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
        let htmlContent = "<h1 style='font:bold;'><strong>FeedBack Gen</strong></h1>"
        htmlContent += `<p>Hi, ${name} </p>`
        htmlContent += "<p>You're almost ready to access our feedback Generator.</p>"
        htmlContent += "<p>Simply tap on the big blue button below to verify your account.</p>"  
        htmlContent += '<p><a href="'+ link  +'" style="color:white;border-radius:10px;background-color: #008CBA; padding:15px 32px; text-align:center; text-decoration:none; display:inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;"> Verify Account </a></p>'
        htmlContent += "<p>See you inside!</p>"
        htmlContent += "<p><Regards,</p>"
        htmlContent += "<p>Sardinew2 Team</p>"

        await sendEmail(user.email, "Feedback Gen Password reset", htmlContent);
        return res.status(200).json({success:true, message: "Verification email has been sent to you Successfully"});
    
    }catch(error){
        res.status(500).json({success:false, message: "Error occurred while trying to send Email", error: error.message});
    }
}
//Reset User password
exports.resetPassword = async (req, res)=>{
   //return res.status(200).json({success:true, id: req.params.userId, token: req.params.token});
      
        try{
        const { password } = req.body; //get password input
        if(!password){ //validate email input
            res.status(400).json({success:false, message:"Password is required!"});
        }
        
        const user = await User.findById(req.params.userId); //Check if user with such ID exists
        if(!user){
            return res.status(409).json({success:false, message:"Invalid link or expired!!"});
        }

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return  res.status(409).json({success:false, message:"Invalid link or expired!!"}); 
        
        user.password = await bcrypt.hash(password, 10);  //encyrpt user password
        await user.save();
        await token.delete();
        return res.status(200).json({success:true, message: "password reset sucessfully"});

    }catch(error){
        res.status(500).json({success:false, message: "Error occurred while trying to change password", error: error.message});
    }
}