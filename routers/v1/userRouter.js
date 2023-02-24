const express = require("express");
const userController = require("../../controllers/user.Controller");
const verifyToken = require("../../middlewares/common/verifyToken");
const router = express.Router();

router.post("/sign-up", userController.signup);
router.post("/login", userController.login);
router.get("/me", verifyToken, userController.getMe);

module.exports = router;
