const User = require("../../models/admin/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
   User.findOne({ email: req.body.email }).exec((err, user) => {
      // check whether the user already existing
      if (user) {
         return res.status(400).json({ message: "User already registered" });
      }
      // if the there is no user crate a user
      const { firstName, lastName, email, password } = req.body;
      const newUser = new User({
         firstName,
         lastName,
         email,
         password,
         userName: Math.random().toString(),
         role: "admin",
      });

      // saving the user to the database
      newUser.save((err, user) => {
         if (err) {
            return res.status(400).json({ message: "something went wrong" });
         }

         if (user) {
            return res
               .status(200)
               .json({ message: "Admin created successfully." });
         }
      });
   });
};

exports.signin = (req, res) => {
   // check the user email
   User.findOne({ email: req.body.email }).exec((err, user) => {
      if (err) return res.status(200).json({ err });
      if (user) {
         // verify the user password create a token
         if (user.authenticate(req.body.password) && user.role === "admin") {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SEC, {
               expiresIn: "1h",
            });
            // get only the destructured once
            const { _id, firstName, lastName, email, role, fullName } = user;
            res.status(200).json({
               token,
               user: {
                  _id,
                  firstName,
                  lastName,
                  email,
                  role,
                  fullName,
               },
            });
         } else {
            res.status(400).json({ message: "Invalid password" });
         }
      } else {
         return res.status(400).json({ message: "Something went wrong" });
      }
   });
};

exports.requireSignin = (req, res, next) => {
   const token = req.headers.authorization.split(" ")[1];
   const user = jwt.verify(token, process.env.JWT_SEC);
   req.user = user;
   next();
};
