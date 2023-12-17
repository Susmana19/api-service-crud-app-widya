//import eksternal
const express = require("express");
const router = express();

//import controller and validation internal
const authController = require("../controllers/auth.controller");

//route products
router.post("/login", authController.login);
router.post("/register", authController.register);

//export
module.exports = router;
