const mongoose = require('mongoose')
const Schema = mongoose.Schema

//User Schema, defining the structure of the database
const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{              //Doesnt have to be unique, people can have the same password as they wish
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema)