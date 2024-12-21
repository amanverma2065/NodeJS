const mongoose = require("mongoose");

// If we want to feed the data written in .env file to the process object then we have to use the "dotenv" library....
require("dotenv").config();
// this statement will load all the data defined in .env file to process object....

const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        console.log("Database Connection Established....");
    })
    .catch( (error) => {
        console.log("Error......");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnection;