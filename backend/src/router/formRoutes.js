const express = require("express");
const auth =require('../middleware/auth')
const formController = require("../controller/formController");

const router = express.Router();

//Specified routes
router.post("/", auth, formController.createForm);
router.get("/", auth, formController.getForms);
router.get("/:id", auth, formController.getForm);
router.patch("/:id",auth,  formController.updateForm);
router.delete("/:id", auth,  formController.deleteForm);

module.exports = router;