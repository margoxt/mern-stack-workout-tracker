import { createContext, useReducer } from 'react'

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