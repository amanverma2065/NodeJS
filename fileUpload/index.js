// Creating the App
const express = require("express");
const app = express();

// Finding the PORT
require("dotenv").config();
const PORT = process.env.PORT || 9000;

// Adding the Middlewares
app.use(express.json());
const fileUploadMiddleware = require("express-fileupload");
app.use(fileUploadMiddleware({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// Connect to Database
const dbConnection = require("./colfig/database");
dbConnection();

// Connect to Cloudinary
const cloudConnect = require("./colfig/cloudinary");
cloudConnect();

// Api route mounting
const upload = require("./routes/fileupload");
app.use("/api/v1/upload", upload);

// Activate Server
app.listen(PORT, () => {
    console.log(`Server Started at port: ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("This is Homepage.....");
});