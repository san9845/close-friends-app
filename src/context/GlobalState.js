import React, { createContext, useReducer } from 'react'
import AppReducer from "./AppReducer"
//Intial State for

const initialState = {
    users: [
        { id: 1, name: 'User One', isClose: false },
        { id: 2, name: 'User two', isClose: true },
        {id: 3, name: 'User three', isClose: false},
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);


// PRovider Components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    // actions
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    const addFav = (user) => {
        dispatch({
            type: 'ADD_FAV',
            payload: user
        })
    }

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            addFav
        }}>
            {children}
        </GlobalContext.Provider>
    )
}