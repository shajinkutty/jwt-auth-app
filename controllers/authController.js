const User = require("../models/User");

// Error handler
const errorHandler = (err) => {
  let errors = { name: "", email: "", password: "" };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "Email already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.signup_post = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    const errors = errorHandler(err);
    res.status(400).send(errors);
  }
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.login_post = (req, res) => {
  console.log("post");
};
