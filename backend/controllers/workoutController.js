//Create a bunch of functions that can reference the router files in the workouts.js

//Imports
const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


//GET ALL Workouts
const getWorkouts = async (req, res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1}) //Descending order, so the newest once will be at the top
    res.status(200).json(workouts)
}

//GET SINGLE Workout
const getWorkout = async (req, res) =>{
    const {id} = req.params     //We are getting the id from the request parameters
    
    //Check if the id exists
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'That workout is not on the lists'})
    }

    const workout = await Workout.findById(id)

    //If that workout doesn't exist
    if (!workout) {
        return res.status(404).json({error: 'That workout is not on the list'})
    }
    res.status(200).json(workout)
}

//CREATE New Workout
const createWorkout = async(req, res) =>{
    const {title, reps, load} = req.body

    //Detect which postfields are empty when they send the requests
    let emptyFields = []

    //Check and store which postfields are empty and put it in the empty list
    if(!title) {emptyFields.push('title')}
    if(!reps) {emptyFields.push('reps')}
    if(!load) {emptyFields.push('load')}
    
    /*Notes: Check if the empty Field is greater than zero, it means that one of the fields is in the array
             and we dont need to go to the try block anymore and just tell the clients which field is missing.*/
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }
    
    //Add document to DB
    try{
        const workout = await Workout.create({title, reps, load})   //This is a async function
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
        }
}

//DELETE Workout
const deleteWorkout = async(req, res) =>{
    const {id} = req.params     //Get the ID

    //Check if the id exists
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'That workout is not on the list'})
    }

    //Finding the workout
    const workout = await Workout.findOneAndDelete({_id: id})

    //Check if workout exists
    if (!workout) {  
        return res.status(404).json({error: 'That workout is not on the list'})
    }
    res.status(200).json(workout)
}

//UPDATE Workout
const updateWorkout = async(req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'That workout is not on the list'})
    }
    
    //Update the workout
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    //Check if the workout exists
    if(!workout){
        res.status(400).json({error: 'That workout is not on the list'})
    }
    res.status(200).json(workout)

}

//Export the different functions
module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}