// import express from "express";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import cookieParser from "cookie-parser";
// dotenv.config();
// import connectDB from "./config/db.js";
// import productRoutes from "./routes/productRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
dotenv.config();
const connectDB = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

const port = process.env.PORT;
connectDB();
const app = express();

//  @desc Middlewares

//  @desc Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(helmet());
// app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is running.");
});

// @desc  Routes

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

// @desc  Connection

app.listen(port, () => console.log(`Server running on port: ${port}`));
