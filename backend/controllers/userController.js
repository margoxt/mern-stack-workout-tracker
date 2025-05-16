const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//Own function in Creating a Token so we can easily reuse the function
const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//Controller Function for Login User
const loginUser = async(req, res) =>{
    const{email, password} = req.body

    try{
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//Controller Function for Signup User
const signupUser = async(req, res) =>{
    //Grab the email and password from the request body
    const {email, password} = req.body

    //Catch any possible errors
    try{
        const user = await User.signup(email, password)
        const token = createToken(user._id)
        
        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {signupUser, loginUser}