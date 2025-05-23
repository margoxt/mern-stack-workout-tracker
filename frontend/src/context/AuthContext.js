import { createContext, useEffect, useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': return { user: action.payload }
    case 'LOGOUT': return { user: null }
    default: return state
  }
}

//Create custom component that would wrap our App.js and provide a value for this Context
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  useEffect(() =>{  //Only fire this useEffect once when the component AuthContext Provider first renders. Checks if we have token
    const user = JSON.parse(localStorage.getItem('user'))   //JSON.parse turns JSon string back into a JavaScript Object
    
    if (user){
      dispatch({type: 'LOGIN', payload: user})  //Only updates if we have a value for the user or Localstorage(user)
    }
  }, [])

  console.log('AuthContext state:', state)
  
  //Return the component
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}


/*Note:
-The purpose of this file is to have a global state reader for when the
user state is in login mode, and remove that if they are loggedOut and 
have a different one if they're just signing in. */