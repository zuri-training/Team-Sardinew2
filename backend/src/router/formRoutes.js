const express = require("express");
const feedbackController = require("../controller/formController");

const router = express.Router();

//Specified routes
router.post("/generatefeedback", feedbackController.createFeedback);
router.get("/feedbacks", feedbackController.getFeeds);
router.get("/getone/:id", feedbackController.getFeedback);
router.patch("/update/:id", feedbackController.updateFeedback);
router.delete("/delete/:id", feedbackController.deleteFeedback);

module.exports = router;
