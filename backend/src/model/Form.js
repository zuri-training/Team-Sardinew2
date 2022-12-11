const {Schema, model} = require("mongoose");

const formSchema = new Schema({
    userId:{
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    title:{
        type:String,
        required:true
    },
    image:{
      type:String
    },
    details:[{
        formField:{
            type:String
        },
        formType:{
            type:String
        },
        isRequired:{
          type:String
        },
        isMulti:{
          type:Boolean,
          default:false
        }
    }],
    isResponseOnce:{
      type:Boolean,
      default:true
  },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

const formModel = model ("forms", formSchema);  //forms = name of DB table
module.exports = formModel;