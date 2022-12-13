

const mongoose = require("mongoose");
//Schema
const templateFormSchema = new mongoose.Schema({
    form_title:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        maxlength:100
    },image:{
        type:String,
        required:true,
        },

templateId:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        maxlength:100
    }, form_details: [ {
    form_field:{
        type:String,
        required:true,
        minlength:3,
        maxlength:200
    },
    form_type:{
        type:String,
        required:true
       
    },
    
    required:{
        type:Boolean,
        default:true,
    }, }]
},
{timestamps:true}
);









const templateFormModel = mongoose.model ("templateForms", templateFormSchema);  //templateForms = name of DB table
module.exports = templateFormModel;

