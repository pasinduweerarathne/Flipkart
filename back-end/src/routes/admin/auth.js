const express = require("express");
const {
   signup,
   signin,
   requireSignin,
} = require("../../controller/admin/auth");
const {
   isRequestValidated,
   validateRequestSignup,
   validateRequestSignin,
} = require("../../validators/auth");
const router = express.Router();

router.post("/admin/signup", validateRequestSignup, isRequestValidated, signup);
router.post("/admin/signin", validateRequestSignin, isRequestValidated, signin);


router.post("/admin/profile", requireSignin, (req, res) => {
   res.status(200).json({ user: "admin profile" });
});

module.exports = router;
