import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.js'

export const useAuthContext = () =>{
    const context = useContext(AuthContext)

    //Check the scope of the context
    if (!context){      //If the context doesnt have a value
        throw Error('useAuthContext must be inside a AuthContextProvider')
    }

    return context
}