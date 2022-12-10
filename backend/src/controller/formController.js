const Form = require("../model/Form");

//CRUD OPERATIONS

//Getting all feedbacks-GET
exports.getFeeds = async (req, res) => {
  Form.find({}, function (err, feedbacks) {
    if (err) {
      res.status(401).json({
        status: "fail",
        message: err,
      });
    }

    res.status(200).json({
      status: "success",
      results: feedbacks.length,
      data: {
        feedbacks,
      },
    });
  });
};

// Find one feedback-GET
exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Form.findById(req.params.id);

    res.status(200).json({
      status: "success",

      data: {
        feedback: feedback,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//create a Feedback- POST
exports.createFeedback = async (req, res) => {
  const newFeedback = await Form.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      data: {
        feedback: newFeedback,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

//Update Feedback-PATCH
exports.updateFeedback = async (req, res) => {
  try {
    const feedback = await Form.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        feedback,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//delete Feedback-DELETE
exports.deleteFeedback = async (req, res) => {
  try {
    await Form.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
