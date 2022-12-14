
 const TemplateForms = require('../model/Templateform');

//CRUD OPERATIONS

//Getting all templateform-GET
exports.getTemplateForms = async (req, res) => {
  TemplateForms.find({}, function (err, templates) {
    if (err) {
      res.status(401).json({
       success: false,
        
        message: err,
      });
    }

    res.status(200).json({
      success: true,
      results: templates.length,
      data: {
        templates,
      },
    });
  });
};

// Find one templateform-GET
exports.getTemplateForm = async (req, res) => {
  try {
    const template = await TemplateForms.findById(req.params.id);

    res.status(200).json({
    success: true,  

      data: {
        template: template,
      },
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err,
    });
  }
};

//create a templateform- POST
exports.createTemplateForm = async (req, res) => {
  const newtemplateform = await TemplateForms.create(req.body);
  try {
    res.status(201).json({
      success: true,
      data: {
        template: newtemplateform,
      },
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

//Update templateform-PATCH
exports.updateTemplateForm = async (req, res) => {
    try {
      let id = { _id: req.params.id };
      let user = await req.body;
      let result = await TemplateForms.findOneAndUpdate(id, user, { new: true });
      if (!result) {
        return res
          .status(400)
          .json({ success: false, message: "Data failed to Update!" });
      }
      return res
        .status(200)
        .json({
          success: true,
          message: "Data Updated Successfully",
          data: result,
        });
    } catch (error) {
      res
        .status(500)
        .json({
          success: false,
          message: "Error occurred while trying to Update data",
          error: error.message,
        });
    }
  };
  

//delete templateform-DELETE

exports.deleteTemplateForm = async (req, res) => {
    try {
      let id = { _id: req.params.id };
      let result = await TemplateForms.findOneAndRemove(id);
      if (!result) {
        return res
          .status(400)
          .json({ success: false, message: "Attempt to delete data failed!" });
      }
      return res
        .status(200)
        .json({
          success: true,
          message: "data deleted Successfully",
          data: result,
        });
    } catch (error) {
      res
        .status(500)
        .json({
          success: false,
          message: "Error occurred while trying to delete",
          error: error.message,
        });
    }
  };
