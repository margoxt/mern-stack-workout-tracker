//The purpose of this file is to define how the workout documents should look

//Require mongoos because its the one that allows us to create schemas and connect to the database. Mongodb alone is schema
const mongoose = require('mongoose')

//Create schema
const Schema = mongoose.Schema

const workoutSchema = new Schema({  //Pass in an argument that we define the schema
    //First Argument: Describes how the pbject looks
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
    //Second Argument: when we add a new object the program will automatically do a timestamp, to say when the document was created
}, {timestamps: true})


//Model based on the Schema; apply the schema to a model and we use the model to interact with the collection of that name
module.exports = mongoose.model('workoutModel', workoutSchema)
