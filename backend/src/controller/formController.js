const { trusted } = require("mongoose");
const Form = require("../model/Form");

//CRUD OPERATIONS

//Getting all forms
exports.getForms = async (req, res) => {
  try {
    let forms = await Form.find();
    if (forms.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No Form was Found",
        data: forms,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Forms(s) Found",
      data: forms,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

// Find one form by ID-GET
exports.getForm = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    const form = await Form.findById(id);
    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not Found in the DB!",
      });
    }
    return res.status(200).json({
      success: true,
      data: form,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

//create a Form- POST
exports.createForm = async (req, res) => {
  try {
    const { userId, title, image, details, isResponseOnce } = req.body; //get Rsesponse input

    if (!(userId && title && image && details && isResponseOnce)) {
      //validate user input
      return res
        .status(400)
        .json({ success: false, message: "All input is required!" });
    }

    const result = await Form.create({
      //save Form in the DB
      userId,
      title,
      image,
      details,
      isResponseOnce,
    });

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Form creation failed!",
      });
    }
    return res.status(201).json({
      success: true,
      message: "Form added Successfully",
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

//Update form-PATCH
exports.updateForm = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    const { userId, title, image, details, isResponseOnce } = req.body; //get Rsesponse input

    if (!(userId && title && image && details && isResponseOnce)) {
      //validate user input
      return res
        .status(400)
        .json({ success: false, message: "All input is required!" });
    }

    let result = await Form.findByIdAndUpdate(
      //update the Form
      id,
      { userId, title, image, details, isResponseOnce },
      { new: true }
    );

    return res.status(200).json({
      status: true,
      message: "Form Updated Successfully",
      data: result,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

//delete Form-DELETE
exports.deleteForm = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let result = await Form.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Attempt to delete Form failed!",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Form deleted Successfully",
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error occurred while trying to delete Form",
      error: err.message,
    });
  }
};
