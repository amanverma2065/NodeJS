const fs = require("fs");

// // Sync.....
// fs.writeFileSync("./02_test.txt", "Hello Aman");

// // Async.....
// fs.writeFile("./02_text.txt", "This is Async file", (err) => {});



// // when we use sync task.... it will return the result in a variable.
// const result = fs.readFileSync("./02_contact.txt", "utf-8");
// console.log(result);

// // the async task expects a callback function to show the result because it will not return any value.
// fs.readFile("./02_contact.txt", "utf-8", (err, result) => {
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// } );
