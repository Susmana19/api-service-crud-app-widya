//import eksternal
const express = require("express");
const router = express();

//import controller
const profileController = require("../controllers/profile.controller");
const verifyToken = require("../../helper/verifyToken");

//route profile and verify token
router.get("/", verifyToken, profileController.get);

//export
module.exports = router;
