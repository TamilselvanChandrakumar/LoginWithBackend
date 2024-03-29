const router = require("express").Router();
const controller = require("../controller/appController.js");
// post metods;

router.route("/register").post(controller.register);
router.route("/login").post(controller.login);
router.route("/generateOtp").post(controller.generateOtp);
router.route("/verifyOtp").post(controller.verfifyOtp);

module.exports = router;
