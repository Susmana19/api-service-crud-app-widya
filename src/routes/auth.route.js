//import eksternal
const express = require("express");
const router = express();

//import controller
const authController = require("../controllers/auth.controller");

//route auth
router.post("/login", authController.login);
router.post("/register", authController.register);

//export
module.exports = router;
