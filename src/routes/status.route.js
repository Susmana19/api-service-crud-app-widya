//import eksternal
const express = require("express");
const router = express();

//import internal
const statusController = require("../controllers/status.controller");

//route status
router.get("/", statusController.get);

//export
module.exports = router;
