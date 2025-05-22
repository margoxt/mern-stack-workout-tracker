import { useAuthContext } from "./useAuthContext"

export const useLogout = () =>{
    const { dispatch } = useAuthContext()

    const logout = () =>{
        //Remove User from storage
        localStorage.removeItem('user')

        //Dispatch Logout Function, just reset the user to be null, no payload like in the Auth Context
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}