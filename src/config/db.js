const mongoose = require('mongoose');



function connectDb(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)
}
module.exports = connectDb