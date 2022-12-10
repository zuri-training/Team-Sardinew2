const router = require("express").Router();
const userController = require("../controller/userController");

router
.get("/", userController.getAllUsers)
.get("/:id", userController.getUserById)
.post("/", userController.addUser)
.put("/:id", userController.updateUser)
.delete("/:id", userController.deleteUser)
.post("/login", userController.login);

module.exports = router;