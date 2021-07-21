const router = require("express").Router();
const categoryCtrl = require("../controllers/Category.ctrl");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");

router
  .route("/")
  .get(categoryCtrl.getCategories)
  .post(auth, authAdmin, categoryCtrl.createCategory);

router
  .route("/:id")
  .delete(auth, authAdmin, categoryCtrl.deleteCategory)
  .put(auth, authAdmin, categoryCtrl.updateCategory);

module.exports = router;
