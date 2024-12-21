const Todo = require("../models/todo");

const getTodo = async (req, res) => {
    try{
        const todoItems = await Todo.find({});
        res.status(200)
        .json({
            success: true,
            data: todoItems,
            message: "All data fetched...",
        });
    }
    catch(error){
        console.log(error);
        res.status(500)
        .json({
            success: false,
            message: error.message,
        })
    }
}; 

const getTodoById = async(req, res) => {
    try{
        const id = req.params.id;
        const todoItemById = await Todo.findById({_id: id});
        res.status(200).json({
            success: true,
            data: todoItemById,
            message:"Data for given Id fetched successfully.....",
        });
    }
    catch(error){
        console.log(error);
        res.status(404).json({
            success: false,
            message:"Data for given Id id not found!!!",
        });
    }
};

module.exports = {getTodo, getTodoById};