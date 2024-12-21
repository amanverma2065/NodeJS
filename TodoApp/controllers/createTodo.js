// Import the model..
const Todo = require("../models/todo");

// Define route handler

const createTodo = async(req, res) => {
    try{
        // Extract title and description from request body
        const { title, description } = req.body;
        // Create a new Todo object and insert into Database
        const response = await Todo.create({title, description});
        // Send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully",
            }
        );
    }
    catch(error){
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"Internal Server Error",
                message:error.message,
            }
        );
    }
}

module.exports = createTodo;