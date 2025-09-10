const express = require('express')
const app = express();
require('dotenv').config()
const connectDb = require("./config/db");
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(cookieParser());

async function startServer(){
    try {
        await connectDb();
    app.listen(process.env.PORT,() => {
        console.log(`Server is running on port : ${process.env.PORT}`);
    });
} catch(err){
    console.error("Failed to start server :",err.message);
    process.exit(1);
}
}
startServer();

