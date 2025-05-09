import { useContext } from 'react'
import { WorkoutsContext } from '../context/WorkoutContext.js'

export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutsContext)

    //Check the scope of the context
    if (!context){      //If the context doesnt have a value
        throw Error('useWorkoutContext must be inside a WorkoutsContextProvider')
    }

    return context
}