//This method will attach the .env variables for the process.env
require('dotenv').config()

//Require the express package through a constant and this can be used as a function
const express = require('express')

//Start the express app
const app = express()

//Global Middleware
/*Note:
- Middleware is any code that executes for getting requests on the server and sending a response. 
- An example is (req, res) => code below
- the .use is to use middleware
- () => {} fire a function for every request that comes in
- next function is to prepare for the next req properly
- middleware helps blocking requests*/
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Reacts to request so this is a route handler
/* Notes:
- The backslash means its a local host
- req is the variable to handle the request and res is the response
- res.json will send a response json
*/
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the App'})
})   

//Listen for requests from a certain port number
/*Notes:
-process.env is letting the code go to the .env file
-process.env.PORT is getting the port number
*/
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
