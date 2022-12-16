const router = require('express').Router();

const controller = require("../controller/templateFormController");

router.get('/',auth, controller.getTemplateForms);
router.get("/:id",auth, controller.getTemplateForm);
router.post('/',auth, controller.createTemplateForm);

router.patch("/:id",auth, controller.updateTemplateForm);
router.delete("/:id",auth, controller.deleteTemplateForm)
module.exports = router;
