const { response } = require("express");

// Import Model..
const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
    try{
        // Fetch all the Todos Data from Database..
        const todos = await Todo.find({});

        // Send a JSON response with a Success Flag
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo Data is Fetched."
        })
    }
    catch(error){
        console.log(error);
        console.error(error);
        
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error."
        })
    }
}


exports.getTodoById = async (req, res) => {
    try{
        // Export Todo Item Based on it's ID..
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        // If the ID is not found from DataBase then..
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "Your Given ID is not Found."
            })
        }

        // If the ID is found from DataBase then..
        res.status(200).json({
            success: true,
            data: todo,
            message: `Your Todo for given Id ${id} is Fetched.`
        })
    }
    catch(error){
        console.log(error);
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error."
        })
    }
}