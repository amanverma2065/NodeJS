const mongoose = require("mongoose");
const fileDB = require("../models/fileDB");
const cloudinary = require("cloudinary").v2;

const localFileUpload = async (req, res) => {
    try {
        // fetching file
        const uploadedFile = req.files.file;
        console.log("Fetched file data is:", uploadedFile);

        let path = __dirname + "/images/" + Date.now() + `.${uploadedFile.name.split('.')[1]}`
        console.log("Path is:", path);

        uploadedFile.mv(path, (error) => {
            console.log(error);
        });

        res.json({
            success:true,
            message:"Local file uploaded successfully....."
        })

    } catch (error) {
        console.log(error);
    }
};


// Image Upload Handler

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder){
    const option = {folder};
    return await cloudinary.uploader.upload(file.tempFilePath, option);
}

const imageUpload = async (req, res) => {
    try{
        const {name, tags, email} = req.body;
        console.log(name, tags, email);

        const fetchedFile = req.files.imageFile;
        console.log("Fetched File:", fetchedFile);

        // validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = fetchedFile.name.split(".")[1].toLowerCase();
        console.log(fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File format not supported.....',
            })
        }

        // If file type is supported
        const response = await uploadFileToCloudinary(fetchedFile, "edtech");
        console.log("response :",response);

        // DB entry
        const fileEntry = await fileDB.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image Successfully Uploaded....."
        })


    }
    catch(error){
        console.log("There is an error");
        res.status(400).json({
            success:false,
            message:'Error Occured.....'
        });
    }
}

module.exports = {localFileUpload, imageUpload};