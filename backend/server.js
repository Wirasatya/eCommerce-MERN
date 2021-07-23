require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const path = require("path");

// app config
const PORT = process.env.PORT || 2300;
const app = express();
app.use(express.json());
app.use(Cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// connect DB
const uri = process.env.MONGO_DB_URL;
mongoose
  .connect(uri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect to MongoDB successfully"))
  .catch((err) => console.log(err));

// endpoint routes
app.use("/api/users", require("./routes/User.route"));
app.use("/api/products", require("./routes/Product.route"));
app.use("/api/categories", require("./routes/Category.route"));
app.use("/api/payments", require("./routes/Payment.route"));
app.use("/api/uploads", require("./routes/Upload.route"));

// listen
app.listen(PORT, () => {
  console.log("server is running on Port : " + PORT);
});
