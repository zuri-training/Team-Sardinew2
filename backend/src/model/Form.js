const mongoose = require("mongoose");
//Schema
const feedbackSchema = new mongoose.Schema({
  feedback: {
    type: String,
    required: [true, "Please Enter Your Feedback"],
  },
});

const Form = mongoose.model("Form", feedbackSchema);
module.exports = Form;
