const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
   {
      firstName: { type: String, required: true, trim: true, min: 3, max: 20 },
      lastName: { type: String, required: true, trim: true, min: 3, max: 20 },
      userName: {
         type: String,
         required: true,
         trim: true,
         unique: true,
         index: true,
         lowercase: true,
      },
      email: {
         type: String,
         required: true,
         trim: true,
         unique: true,
         lowercase: true,
      },
      hashed_password: { type: String, required: true },
      role: { type: String, enum: ["user", "admin"], default: "user" },
      contactNumber: { type: Number },
      profilePicture: { type: String },
   },
   { timestamps: true }
);

// creating the hashed password
userSchema.virtual("password").set(function (password) {
   this.hashed_password = bcrypt.hashSync(password, 10);
});

userSchema.virtual("fullName").get(function () {
   return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
   authenticate: function (password) {
      return bcrypt.compareSync(password, this.hashed_password);
   },
};

module.exports = mongoose.model("User", userSchema);
