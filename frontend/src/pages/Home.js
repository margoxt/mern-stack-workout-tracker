import { useEffect } from 'react';

const Home = () =>{

    //Fires a function when the component is rendered
    useEffect(() =>{
        //Update Local States
        const [workouts, setWorkouts] = useState(null)

        const fetchWorkouts = async () =>{
            const response = await fetch('http://localhost:4000/api/workouts')  //fetch the backend server and store the data in the 'response' object
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
                <p key={workout._id}>{workout.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home

/*Notes:
-The useEffect is to help fetch data from the homepage with the use of the API
-In the cycle through condition we used () instead of {} after => because we'll be using a template
 */