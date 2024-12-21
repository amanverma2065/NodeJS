const http = require("http");
const fs = require("fs");

// const myServer = http.createServer( (req, res) => {
//     console.log("New Request Received");
//     res.end("Hello From Server");
// });

// myServer.listen(8000, () => {
//     console.log("Server Started!");
// });


const newServer = http.createServer( (req, res) => {
    const log = `${Date.now()} : ${req.url} : New Request Received \n`;
    fs.appendFile("03_log.txt", log , (err, result) => {
        res.end("Hello From Server");
    })
});

newServer.listen(8000, () => {
    console.log("Server Started!");
});