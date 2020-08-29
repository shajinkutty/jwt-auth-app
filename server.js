const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authroute = require("./routes/authRouter");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/cocktails", (req, res) => {
  res.render("cocktails");
});

app.use(authroute);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("mongoDB connected");
    app.listen(process.env.PORT || 3000, () => {
      console.log("server running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
