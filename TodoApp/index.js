const express = require("express");
const app = express();

// Load config from .env file
require("dotenv").config();
const PORT = process.env.PORT || 9000;

// Adding middleware to parse json request body
app.use(express.json());

// import routes for Todo API

const todoRoutes = require("./routes/todos");

// mount the todo API routes

app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`)
});

// database connect 
const dbConnection = require("./config/database");
dbConnection();

// default route
app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage...</h1>`)
});