const { response } = require("express");

// Import the model..
const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;

        const todo = await Todo.findByIdAndDelete(id);

        // If the ID is not found from DataBase then..
        if(!todo){
            return res.status(404).json({
                success: false,
                message: `Your Given ID ${id} is not Found.`
            })
        }

        res.status(200).json({
            success: true,
            message: `Your given ID ${id} Todo is Deleted Successfully`
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