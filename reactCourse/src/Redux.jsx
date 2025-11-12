// Redux is a Single source of Truth, where our all states are stored.
// React Redux can control which component to be rerendered and which to not on change in state variable

// Redux Toolkit (RTK) is the official, recommended way to write Redux logic.
// It’s built by the Redux team to make Redux simpler, faster, and less error-prone.
// configureStore(), createSlice() these functions are provided by redux toolkit.

// To install redux in react project run below command
// > npm install @reduxjs/toolkit react-redux

// Go to this link for redux toolkit documentation - https://redux-toolkit.js.org/tutorials/quick-start
// There you will find all code related to redux which we need to write in store.js, counterSlice files etc.
// Just remember the concept, code you will get on above site

// We can read data from the store with useSelector, and dispatch actions using useDispatch
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount } from "./Redux/Counter/counterSlice";
// There are functions defined inside counterSlice file to update value of state variable

function ReduxToolkit(){
    // count is local variable, useSelector function used to fetch value of state, counter is object containing value as child element which holds the value of counter variable.
    const count = useSelector((state) => state.counter.value);
    // Above line tells react to access value of counter from redux store

    // As we can use hooks inside function body and cant directly use inside return statement hence we will store useDispatch() hook inside dispatch variable to use it inside return statement.
    const dispatch = useDispatch();
    return (
        <>
            <h2>Use of Redux by using Redux toolkit</h2>
            <h1>Count : {count}</h1>
            <button style={{padding:'5px 20px'}} onClick={() => dispatch(increment())}>+</button>
            <button style={{padding:'5px 20px'}} onClick={() => dispatch(decrement())}>-</button>
            <button style={{padding:'5px 20px'}} onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </>
    )
}

export default ReduxToolkit;

// Summary to use React Redux - 

// Create a Redux store with configureStore
// configureStore accepts a reducer function as a named argument
// configureStore automatically sets up the store with good default settings
// Provide the Redux store to the React application components
// Put a React-Redux <Provider> component around your <App />
// Pass the Redux store as <Provider store={store}>
// Create a Redux "slice" reducer with createSlice
// Call createSlice with a string name, an initial state, and named reducer functions
// Reducer functions may "mutate" the state using Immer
// Export the generated slice reducer and action creators
// Use the React-Redux useSelector/useDispatch hooks in React components
// Read data from the store with the useSelector hook
// Get the dispatch function with the useDispatch hook, and dispatch actions as needed


// For small application, we can use Context API instead of using React Redux
// For large application, use React Redux.