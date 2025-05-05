//Express = require the express package to manage here
const express = require('express')

//Creates an instance of the router
const router = express.router()

//GET all workouts, one slash only to get all the workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//GET a single workout, :id means that the :id can change
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//DELETE a workout
router.delete('/:id', (req, res) =>{
    res.json({mssg: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'UPDATE a workout'})
})


//Export the Router
modules.exports = router








/* -----------------------------------------------------------
Notes:
- The backslash means its a local host
- req is the variable to handle the request and res is the response
- res.json will send a response json
- Reacts to request so this is a route handler
router.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the App'})
})


*/