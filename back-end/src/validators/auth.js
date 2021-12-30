const { check, validationResult } = require("express-validator");

// validating signup
exports.validateRequestSignup = [
   check("firstName").notEmpty().withMessage("firstName is required"),
   check("lastName").notEmpty().withMessage("lastName is required"),
   check("email").isEmail().withMessage("email is required"),
   check("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 character long"),
];

// validating signin
exports.validateRequestSignin = [
   check("email").isEmail().withMessage("email is required"),
   check("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 character long"),
];

exports.isRequestValidated = (req, res, next) => {
   // getting the errors and stored in errors
   const errors = validationResult(req);
   // check the errors and returning the error
   if (errors.array().length > 0) {
      return res.status(400).json({ error: errors.array()[0].msg });
   }
   next();
};
