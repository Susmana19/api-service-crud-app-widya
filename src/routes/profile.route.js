//import eksternal
const express = require("express");
const router = express();

//import controller and validation internal
const profileController = require("../controllers/profile.controller");
const verifyToken = require("../../helper/verifyToken");

//route products
router.get("/", verifyToken, profileController.get);

//export
module.exports = router;
