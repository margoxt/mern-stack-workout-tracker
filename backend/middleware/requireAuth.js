const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async(req , res, next) =>{

    //Verify if the user is authenticated
    const {authorization} = req.headers     //Grabbing the authorization header property

    //Check if the authorization has a value
    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }

    //Get token
    const token = authorization.split(' ')[1] 

    //Verify the token if it has been tampered with and returns the token/payload from that token
    try{
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id')    //Use the id from the payload to find the user
        next()  //find the next handler function

    } catch(error){
        console.log(error)
        res.status(401).json({error: 'Request is not authorized.'})
    }
}

module.exports = requireAuth