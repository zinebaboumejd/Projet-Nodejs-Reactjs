
const asyncHandler = require("express-async-handler");
const User = require("../models/authModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register a new user
// @route   POST /user/register
// @access  Public

const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //   check if any of the fields are empty
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //   check if the user already exists

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    token: generateToken()
  });


  //   if user created send success message
  if (user) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Incorrect email or password");
  }
});

// @desc    Auth user & get token
// @route   POST /api/user/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  // res.json({message:'Login user'})

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }

});
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
module.exports = { register, login };