const router = require("express").Router();
const auth = require('../middleware/auth');  //this will be used here
const responseController = require("../controller/responseController");

router
.get("/", auth, responseController.getAllResponse)
.get("/:id", auth, responseController.getResponseById)
.post("/", auth, responseController.addResponse)
.put("/:id", auth, responseController.updateResponse)
.delete("/:id", auth, responseController.deleteResponse);

module.exports = router;