const express = require('express')
const router = express.Router()             //This makes an instance of the express router

//Controller Functions
const { loginUser, signupUser } = require('../controllers/userController')

//Login Route
router.post('/login', loginUser)

//Signup Route
router.post('/signup', signupUser)


//Exporting the file
module.exports = router