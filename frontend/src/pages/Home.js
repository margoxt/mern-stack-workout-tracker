import { useEffect, useState } from 'react';

//Import WorkoutDetails.js
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () =>{
    const [workouts, setWorkouts] = useState(null)      //Update Local States
    
    //Fires a function when the component is rendered
    useEffect(() =>{
        const fetchWorkouts = async () =>{
            const response = await fetch('/api/workouts')  //fetch the backend server and store the data in the 'response' object
            const json = await response.json()  //This will then contain an array of objects

            //Check if the response is valid
            if (response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts() //Calls the function
    }, [])  //Brackets so its a dependency array and so it will make the useEffect fire only once everytime its opened

    return (
        <div className="home">
            <div className="workouts">
                {/* Cycle through workouts but with conditional statements */}
                {workouts && workouts.map((workout) => (

                /* Helps the components to output a bit more template and shows all elements inside the workout*/
                <WorkoutDetails key ={workout._id} workout={workout}/>
                ))}
            </div>

            {/* The workoutForm is outside because it's not supposed to be directly connected to the list of workouts */}
            <WorkoutForm/>  
        </div>
    )
}

export default Home

/*Notes:
-The useEffect is to help fetch data from the homepage with the use of the API
-In the cycle through condition we used () instead of {} after => because we'll be using a template
 */