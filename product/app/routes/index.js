const express = require("express");
const productRoutes = require("./product.js");

const router = express();

router.use("/", productRoutes);

module.exports = router;
