//Express = require the express package to manage here
const express = require('express')

//Import the functions from the Controllers
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

//Creates an instance of the router
const router = express.Router()

//GET all workouts, one slash only to get all the workouts
router.get('/', getWorkouts)

//GET a single workout, :id means that the :id can change
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)


//Export the Router
module.exports = router








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