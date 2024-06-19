const express = require("express");
const router = express();

const productCtrl = require("../controllers/product.js");

router.post("/add", productCtrl.add);
router.get("/view/:id", productCtrl.view);
router.put("/update/:id", productCtrl.update);
router.delete("/delete/:id", productCtrl.delete);


module.exports = router;