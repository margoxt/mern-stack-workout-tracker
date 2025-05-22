//This page will handle the logic of hitting the API endpoints to sign the user using the details
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignUp = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    //This is when there is a signup request
    const signup = async(email, password) =>{
        setIsLoading(true)
        setError(null)                                      //Resetting the error to remove the error display everytime the user tries to signup 
        
        //Post Method
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        //This will return an information with the json web token if its a success, if not there will be an error message.
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)                             //Set the is loading to false because we aren't loading anything anymore due to an error
            setError(json.error)
        }
        if (response.ok){
             //Save the user email and json webtoken to local storage
            localStorage.setItem('user', JSON.stringify(json)) 
            
            //Update the authContext with the user email we get back
            dispatch({type: 'LOGIN', payload: json})

            //Update loading state
            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}


