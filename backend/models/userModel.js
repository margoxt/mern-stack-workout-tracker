const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const validator = require('validator')

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

//Hash Passwords by using a static signup method
userSchema.statics.signup = async function(email, password){    //Use the function method, not the arrow method, because we are using the "this" keyword
    
    //Validation: did they enter an email or password?
    if(!email || !password){
        throw Error('All fields must be filled.')
    }
    //Validation: is the email valid?
    if(!validator.isEmail(email)){
        throw Error('Email is not valid.')
    }
    //Check if the password is strong enough
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough.')
    }
    
    const exists = await this.findOne({email})      //Use the word this to refer to this file, because the User export is at the bottom.
    
    //If the user already exists, return an error
    if(exists){
        throw Error('Email is already in use.')
    }
    
    //Generate salt and hash the password 
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    //Take the password and email, and store it in the database
    const user = await this.create({email, password: hash})

    return user
}

//Static Login Method: Check if email is within database and if hashed password matches with email
userSchema.statics.login = async function(email, password){

    //Check if the email and password has an inputted value
    if(!email || !password){
        throw Error('All fields must be filled.')
    }

    //Find the user in the database with that email
    const user = await this.findOne({email})

    if(!user){  //If we can't find anyone with that email, throw error
        throw Error('Incorrect email.')
    }

    //Match the passwords. The password is the plain one and the user.password is the hashed one.
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user     //If the password is right, return the user
}


module.exports = mongoose.model('User', userSchema)