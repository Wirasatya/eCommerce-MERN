const router = require("express").Router();
const productCtrl = require("../controllers/Product.ctrl");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");

router
  .route("/")
  .get(productCtrl.getProducts)
  .post(auth, authAdmin, productCtrl.createProduct);

router
  .route("/:id")
  .delete(auth, authAdmin, productCtrl.deleteProduct)
  .put(auth, authAdmin, productCtrl.updateProduct);

module.exports = router;
