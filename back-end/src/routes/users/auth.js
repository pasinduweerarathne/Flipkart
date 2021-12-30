const express = require("express");
const {
   signup,
   signin,
   requireSignin,
} = require("../../controller/users/auth");
const {
   isRequestValidated,
   validateRequestSignup,
   validateRequestSignin,
} = require("../../validators/auth");
const router = express.Router();

router.post("/signup", validateRequestSignup, isRequestValidated, signup);
router.post("/signin", validateRequestSignin, isRequestValidated, signin);

router.post("/profile", requireSignin, (req, res) => {
   res.status(200).json({ user: "profile" });
});

module.exports = router;
