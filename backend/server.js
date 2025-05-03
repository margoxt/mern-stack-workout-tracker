//This method will attach the .env variables for the process.env
require('dotenv').config()

//Require the express package through a constant and this can be used as a function
const express = require('express')

//Start the express app
const app = express()

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
    console.log('listening on port')
})
