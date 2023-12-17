//import eksternal
const express = require("express");
const router = express();

//import internal
const productController = require("../controllers/product.controller");
const verifyToken = require("../../helper/verifyToken");

//route products
router.get("/", verifyToken, productController.getAll);
router.get("/:id", verifyToken, productController.getById);
router.post("/", verifyToken, productController.add);
router.patch("/:id", verifyToken, productController.update);
router.delete("/:id", verifyToken, productController.remove);

//export
module.exports = router;
