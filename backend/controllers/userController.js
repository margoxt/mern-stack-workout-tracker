const User = require('../models/userModel')

//Controller Function for Login User
const loginUser = async(req, res) =>{
    res.json({mssg: 'login user'})
}

//Controller Function for Signup User
const signupUser = async(req, res) =>{
    res.json({mssg: 'signup user'})
}


module.exports = {signupUser, loginUser}