const { response } = require("express");

// Import the model..
const Todo = require("../models/Todo");

// Defining Route Handler..
exports.createTodo = async(req, res) => {
    try{
        // Extract title and description from request body..
        const {title, description} = req.body;

        // Create a new Todo Object  and insert in DB..
        const response = await Todo.create({title, description})

        // Send a JSON response with a Success Flag
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry Created Successfuly"
        })
    }

    catch(error){
        console.error(error);
        console.log(error);
        
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: error.message
        })
    }
}