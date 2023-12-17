//import eksternal
const express = require("express");
const router = express.Router();

// import internal
const productRoute = require("./product.route");
const categoryRoute = require("./category.route");
const statusRoute = require("./status.route");
const authRoute = require("./auth.route");
const profileRoute = require("./profile.route");

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "server running successfully",
  });
});

//routing products
router.use("/products", productRoute);
router.use("/category", categoryRoute);
router.use("/status", statusRoute);

//routinng auth
router.use("/auth", authRoute);

//routinng profile
router.use("/profile", profileRoute);

module.exports = router;
