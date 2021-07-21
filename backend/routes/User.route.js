const router = require("express").Router();
const userCtrl = require("../controllers/User.ctrl");
const auth = require("../middlewares/auth");

// register
router.post("/register", userCtrl.register);

// login
router.post("/login", userCtrl.login);

// logout
router.get("/logout", userCtrl.logout);

// refresh access token
router.get("/refresh_token", userCtrl.refreshToken);

// get data login user
router.get("/infor", auth, userCtrl.getUser);

// addcart for login user
router.patch("/addcart", auth, userCtrl.addCart);

// histtory payment for user
router.get("/history", auth, userCtrl.history);

module.exports = router;
