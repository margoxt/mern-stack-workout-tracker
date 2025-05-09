import { createContext, useReducer } from 'react'

//Create Context and store it in a constant, we are exporting it because we need it later in another file
export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) =>{
    switch(action.type){
        case 'SET_WORKOUTS':
            return {workouts: action.payload}
        case 'CREATE_WORKOUT':
            return{workouts: [action.payload, ...state.workouts]}
        default:
            return state
    }
}

//Provide that Context to our application component tree by making a context provider component
export const WorkoutsContextProvider = ({children}) => {    //The children component represents the structuring in the index.js, because we are talking about the <App/>
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null      //Initial value for the object
    })

    return(
        <WorkoutsContext.Provider value={{...state, dispatch}}>                  {/*Wrap everything that needs to access the context, in this case we need to wrap the whole application */}
            { children }
        </WorkoutsContext.Provider>

    )
}
