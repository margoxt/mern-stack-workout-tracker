const User = require('../models/userModel')

//Controller Function for Login User
const loginUser = async(req, res) =>{
    res.json({mssg: 'login user'})
}

//Controller Function for Signup User
const signupUser = async(req, res) =>{
    //Grab the email and password from the request body
    const {email, password} = req.body

    //Catch any possible errors
    try{
        const user = await User.signup(email, password)
        res.status(200).json({email, user})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {signupUser, loginUser}