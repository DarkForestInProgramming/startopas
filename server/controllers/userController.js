import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

// User Functions

// @desc    Register user
// @desc    POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc    Auth user & get token
// @desc    POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    // Set JWT as HTTP-Only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Blogas el. paštas arba slaptažodis.");
  }
});

// @desc    Logout user / clear cookie
// @desc    POST /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Sėkmingai atsijungta." });
});

// @desc    Get user profile
// @desc    GET /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc    Update user profile
// @desc    PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// Admin Functions

// @desc    Get users
// @desc    PUT /api/users
// @access  Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc    Delete user
// @desc    DELETE /api/users/:id
// @access  Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete users");
});

// @desc    Get user by ID
// @desc    GET /api/users/:id
// @access  Private/Admin

const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user by ID");
});

// @desc    Update user
// @desc    PUT /api/users/:id
// @access  Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
