import asyncHandler from "express-async-handler";
import User from "../models/User.js";

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
  res.send("auth user");
});

// @desc    Logout user / clear cookie
// @desc    POST /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
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
