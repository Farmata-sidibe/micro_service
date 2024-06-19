const express = require("express");
const router = express();

const productCtrl = require("../controllers/product.js");

router.post("/add", productCtrl.add);
router.get("/view", productCtrl.view);
router.put("/update", productCtrl.update);
router.delete("/delete", productCtrl.delete);


module.exports = router;