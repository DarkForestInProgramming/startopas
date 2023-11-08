import asyncHandler from "express-async-handler";
import Order from "../models/Order.js";

// @desc    Create new order
// @desc    POST /api/orders
// @access  Private

const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

// @desc    Get logged in user orders
// @desc    GET /api/orders/myorders
// @access  Private

const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

// @desc    Get order by ID
// @desc    GET /api/orders/:id
// @access  Private

const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// @desc    Update order to paid
// @desc    GET /api/orders/:id/pay
// @access  Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

// @desc    Update order to delivered
// @desc    GET /api/orders/:id/deliver
// @access  Private/Admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

// @desc    Get all orders
// @desc    GET /api/orders
// @access  Private/Admin

const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
