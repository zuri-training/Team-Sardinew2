

const router = require('express').Router();

const controller = require("../controller/templateFormController");

router.get('/', controller.getTemplateForms);
router.get("/:id", controller.getTemplateForm);
router.post('/', controller.createTemplateForm);

router.patch("/:id", controller.updateTemplateForm);
router.delete("/:id", controller.deleteTemplateForm)
module.exports = router;









;