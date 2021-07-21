const router = require("express").Router();
const paymentCtrl = require("../controllers/Payment.ctrl");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");

router
  .route("/")
  .get(auth, authAdmin, paymentCtrl.getPayments)
  .post(auth, paymentCtrl.createPayment);

module.exports = router;
