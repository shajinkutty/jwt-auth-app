const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();

router.get("/signup", authController.signup_get);
router.get("/login", authController.login_get);

module.exports = router;
