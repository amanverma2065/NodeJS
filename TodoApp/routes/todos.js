const express = require("express");
const router = express.Router();

// Import the controller
const createTodo = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");

// Define API routes

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);

module.exports = router;