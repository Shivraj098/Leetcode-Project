const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;


const userSchema = new Schema({
    firstName : {
        type :" String",
        required : true,
        minLength : 3,
        maxlength : 20
    },
    lastName : {
        type : String,
        minLength : 3,
        maxlength : 20
     },
     emailId : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        immutable : true
     },
     password : {
        type : String,
        required : true,
        minLength : 6,
        maxlength : 15,
        immutable : true
     }
})