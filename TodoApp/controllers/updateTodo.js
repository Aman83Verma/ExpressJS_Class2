// Importing the Model..
const Todo = require("../models/Todo");


// Defining Route Handler..
exports.updateTodo = async(req, res) => {
    try{
        // Export Todo Item Based on it's ID..
        // const id = req.params.id;
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()}
        )

        // If the ID is not found from DataBase then..
        if(!todo){
            return res.status(404).json({
                success: false,
                message: `Your Given ID ${id} is not Found.`
            })
        }

        // If the ID is found from DataBase then..
        // Send a JSON response with a Success Flag
        res.status(200).json({
            success: true,
            data: todo,
            message: `Updated Todo of ID ${id} Successfuly`
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