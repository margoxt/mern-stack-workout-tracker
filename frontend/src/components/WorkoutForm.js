import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = () =>{
     //Update Context state to keep the ui and database in sync
    const {dispatch} = useWorkoutsContext();
    //Create state for each of the properties of the workout
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');

    //For error handling
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async (e) => {
        //Remove the default action a.k.a refreshing the page
        e.preventDefault();

        //This will send the body of the request    
        const workout = {title, reps, load}

        //Use the fetch API to send the post request
        const response = await fetch('/api/workouts', {
            //Second argument will be object with options
            method: 'POST',                                         //this sends data using the POST method
            body: JSON.stringify(workout),                          //converting the workout object into a JSON string to send a request body. Because the request created is not json formatted data
            headers: {                                              //this tells the server you are sending JSON data
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)                        //Whatever empty field we get, we put it back inside the useState([])
        }

        if(response.ok){
            //Set the error to null and inform the user that the request has been successful
            setError(null)
            //Set the emptyfield to an empty array so we dont see those errors in the page.
            setEmptyFields([])
            //Reset the states because the request has already been pushed
            setTitle('')
            setReps('')
            setLoad('')
            console.log('New workout added!: ', json)
            //Dispatch the new workout to the context, the workout we just added is the json
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return(
        //Create a form with 3 input fields to update the state of that particular field
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title: </label>
            <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                //Style the different inputs by giving the imports a conditional class
                className={emptyFields.includes('title') ? 'error': ''}     //If the title is empty, add the error class
            />

            <label>Amount of Reps: </label>
            <input 
                type="number" 
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error': ''}
            />

            <label>Load (in kg): </label>
            <input 
                type="number" 
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error': ''}
            />

            <button>Add Workout</button>

            {/* This is to check if there is an error and output the error in a clean manner, that's why it's in a div */}
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm