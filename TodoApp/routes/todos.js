const express = require('express');

// Mapping it with Router.
const router = express.Router();

// Import Create Controller
const {createTodo} = require("../controllers/createTodo");

// Import Get Controller for All & One Todo Item..
const {getTodo, getTodoById} = require("../controllers/getTodo");

// Import Update Controller for Specific Todo Item..
const {updateTodo} = require("../controllers/updateTodo");

// Import Delete Controller for Deletion of Todo Items..
const {deleteTodo} = require("../controllers/deleteTodo");

// Defining API Routes for Create Todo..
router.post("/createTodo", createTodo);

// Defining API Routes for Get Todo for All Items..
router.get("/getTodos", getTodo);

// Defining API Routes for Get Todo for One Item..
router.get("/getTodos/:id", getTodoById);

// Defining API Routes for Update for Specific Todo Item..
router.put("/updateTodo/:id", updateTodo);

// Defining API Routes for Deleting the Todo Items..
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;