//This method will attach the .env variables for the process.env
require('dotenv').config()

//Require the express package through a constant and this can be used as a function
const express = require('express')

//Require the exported workouts
const workoutRoutes = require('./routes/workouts')

//Start the express app
const app = express()

//Global Middleware
/*Note:
- Middleware is any code that executes for getting requests on the server and sending a response. 
- An example is (req, res) => code below
- the .use is to use middleware
- () => {} fire a function for every request that comes in
- next function is to prepare for the next req properly
- middleware helps blocking requests
- the post and patch workout can be accessed with the request argument, and we use middleware*/
app.use(express.json()) //It looks if the request has data sending to the server, if yes then it passes it to the request object and access it in the request handler
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//This grabes all routes attached in the workoutfile and uses it on the app
/*Notes:
-only find the routes when it comes to a specific path.
-when we fire a request to the '/api/workouts, then use the routes' */
app.use('/api/workouts', workoutRoutes)


//Listen for requests from a certain port number
/*Notes:
-process.env is letting the code go to the .env file
-process.env.PORT is getting the port number
*/
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
