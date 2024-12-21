const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen( 8000, () => {
    console.log("Server Started at port: 8000");
} );

app.get( '/', (request, response) => {
    response.send("Hello Aman!!");
} );

app.post( '/username', (request, response) => {
    const {firstName, lastName} = request.body;
    console.log(firstName);
    console.log(lastName);
    response.send("Data Displayed Successfully....");
} );

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mydataBase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( () => {
    console.log("Connection Successful");
} )
.catch( (error) => {
    console.log("Error.....")
} );