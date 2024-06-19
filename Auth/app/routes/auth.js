const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.js");
const auth = require("../middlewares/auth.js")

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/getRole", auth, userCtrl.getUserInfoFromToken)

module.exports = router;