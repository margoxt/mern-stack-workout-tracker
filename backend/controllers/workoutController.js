//Create a bunch of functions that can reference the router files in the workouts.js

//Import workout model
const workoutModel = require('../models/workoutModel')
const Workout = require('../models/workoutModel')


//GET ALL Workouts
const getWorkouts = async (req, res) =>{
    const workouts = await workoutModel.find({}).sort({createdAt: -1}) //Descending order, so the newest once will be at the top
    res.status(200).json(workouts)
}

//GET SINGLE Workout
const getWorkout = async (req, res) =>{
    const {id} = req.params     //We are getting the id from the request parameters
    const workout = await Workout.findById(id)

    if (!workout) {     //If that workout doesn't exist
        return res.status(404).json({error: 'That workout is not on the list'})
    }
    res.status(200).json(workout)
}

//CREATE New Workout
const createWorkout = async(req, res) =>{
    const {title, reps, load} = req.body
    
    //Add document to DB
    try{
            const workout = await Workout.create({title, reps, load})   //This is a async function
            res.status(200).json(workout)
    }catch(error){
            res.status(400).json({error: error.message})
        }
}

//DELETE Workout


//UPDATE Workout


//Export the different functions
module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
}