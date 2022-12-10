const mongoose = require("mongoose");
//Schema
const feedbackSchema = new mongoose.Schema({
  feedback: {
    type: String,
    required: [true, "Please Enter Your Feedback"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

const Form = mongoose.model("Form", feedbackSchema);
module.exports = Form;
