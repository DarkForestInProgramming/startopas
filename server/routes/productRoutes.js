// import express from "express";
// import {
//   getProducts,
//   getProductById,
// } from "../controllers/productController.js";

const express = require("express");
const {
  getProducts,
  getProductById,
} = require("../controllers/productController.js");

const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

// export default router;

module.exports = router;
