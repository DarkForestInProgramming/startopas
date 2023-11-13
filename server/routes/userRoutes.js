// import express from "express";
// import {
//   registerUser,
//   authUser,
//   logoutUser,
//   getUserProfile,
//   updateUserProfile,
//   getUsers,
//   deleteUser,
//   getUserByID,
//   updateUser,
// } from "../controllers/userController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";

const express = require("express");
const {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
} = require("../controllers/userController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserByID)
  .put(protect, admin, updateUser);

// export default router;

module.exports = router;
