const mongoose = require("mongoose");

require("dotenv").config();

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        console.log("Database Connected......");
    })
    .catch( (error) => {
        console.log(error.message);
        process.exit(1);
    });
};

module.exports = dbConnection;