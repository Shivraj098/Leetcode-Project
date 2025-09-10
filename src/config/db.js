const mongoose = require('mongoose');
const Schema = mongoose.Schema;


function main(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)
}