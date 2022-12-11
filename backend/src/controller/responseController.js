const {trusted} = require('mongoose');
const Response = require("../model/Response");


//get all Form Response from responses table
exports.getAllResponse = async (req, res) =>{
    try{
        let responses = await Response.find();
        if(responses.length === 0){
            return res.status(404).json({success:false, message:'No Response was Found' });
        }
        res.status(200).json({success:true, message:"Response(s) Found", data:responses });
    }catch(error){
        res.status(500).json({success:false, message:'Internal Server Error', error: error.message});
    }
}

exports.getResponseById = async (req, res) =>{
    try{
        let id = {_id:req.params.id};
        let response = await Response.findOne(id);
        if(!response){
            return res.status(404).json({success:false, message:"Response not Found in the DB!"});
        }
        return res.status(200).json({success:true, message:"Response Found!", data:response});
    }catch(error){
        res.status(500).json({success:false, message:"Internal Server Error", error: error.message});
    }
}

exports.addResponse = async (req, res) =>{
    try{
        const {form_id, form_title, user_id, name, email, response} = req.body; //get Rsesponse input
    
        if(!(form_id && form_title && user_id && name && email && response )){ //validate user input
            res.status(400).json({success:false, message:"All input is required!"});
        }
        const checkResponse = await Response.findOne({form_id}); //Validate if user already exists in the DB
        if(checkResponse){
            return res.status(409).json({success:false, message:"Form Response with this Form Id Exist!"});
        }

        const result = await Response.create({   //save Response in the DB
            form_id,
            form_title,
            user_id,
            name,
            email,
            response
        });

        if(!result){
            return res.status(400).json({success:false, message:"Response creation failed!"});
        }
        return res.status(201).json({success:true, message: "Response added Successfully", data:result});
    }catch(error){
        res.status(500).json({success:false, message: "Internal Server Error", error: error.message});
    }
}

exports.updateResponse = async (req, res) =>{
    try{
        let id = {_id: req.params.id};
        const {form_id, form_title, user_id, name, email, response} = req.body; //get Rsesponse input
        
        if(!(form_id && form_title && user_id && name && email && response )){ //validate user input
            res.status(400).json({success:false, message:"All input is required!"});
        }
       
        const checkResponse = await Response.findOne({form_id}); //Validate if user already exists in the DB
        if(!checkResponse){
            return res.status(409).json({success:false, message:"Form Response with this Form Id doesnt Exist!"});
        }
        
    
         let result = await Response.findOneAndUpdate(   //update the response
                id, 
                {form_id, form_title, user_id, name, email, response}, 
                {new:true}
            );
        
        if(!result){
            return res.status(400).json({success:false, message:"Response failed to Update!"});
        }
        return res.status(200).json({success:true, message: "Response Updated Successfully", data:result});
    }catch(error){
        res.status(500).json({success:false, message: "Error occurred while trying to Update Response", error: error.message});
    }
}

exports.deleteResponse = async (req, res) =>{
    try{
        let id = {_id: req.params.id};
        let result = await Response.findOneAndRemove(id);
        if(!result){
            return res.status(400).json({success:false, message:"Attempt to delete Response failed!"});
        }
        return res.status(200).json({success:true, message: "Response deleted Successfully", data:result});
    }catch(error){
        res.status(500).json({success:false, message: "Error occurred while trying to delete", error: error.message});
    }
}


//download

//export