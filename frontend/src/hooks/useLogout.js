import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () =>{
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch} = useWorkoutsContext()

    const logout = () =>{
        //Remove User from storage
        localStorage.removeItem('user')

        //Dispatch Logout Function, just reset the user to be null, no payload like in the Auth Context
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null}) //clear the global workouts state when logging out
    }

    return {logout}
}