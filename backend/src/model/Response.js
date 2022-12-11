const { Schema, model } = require("mongoose");

const responseSchema = new Schema(
  {
    form_id: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
    },
    form_title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    full_name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
    },
    response: [
      {
        question: {
          type: string,
        },
        answer: {
          type: string,
        },
      },
    ],
  },
  { timestamps: true }
);

const responseModel = model("responses", responseSchema); //responses = name of DB table
module.exports = responseModel;
