const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
// routes
const userRoutes = require("./src/routes/users/auth");
const adminRoutes = require("./src/routes/admin/auth");

const app = express();

dotenv.config();

mongoose
   .connect(process.env.DB_URL)
   .then(console.log("DB connected successfully :)"))
   .catch((err) => {
      console.log("DB is failed :(", err);
   });

app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/users", adminRoutes);

app.listen(process.env.PORT, () => {
   console.log("server is running successfully :)");
});
