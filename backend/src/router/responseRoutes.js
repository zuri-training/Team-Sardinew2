const router = require("express").Router();
const responseController = require("../controller/responseController");

router
.get("/", responseController.getAllResponse)
.get("/:id", responseController.getResponseById)
.post("/", responseController.addResponse)
.put("/:id", responseController.updateResponse)
.delete("/:id", responseController.deleteResponse);

module.exports = router;