const express = require("express");
const app = express();
require("dotenv").config();
const authroute = require("./routes/authRouter");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/cocktails", (req, res) => {
  res.render("cocktails");
});
app.use(authroute);

app.listen(process.env.PORT || 3000, () => {
  console.log("server running");
});
