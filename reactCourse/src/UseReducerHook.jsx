// UseReducer hook is an alternative of useState hook
// We use it only when we have to use multiple related state variables
// Generally it takes much time to execute hence we avoid using it unnecessarily
// We use useReducer hook to store multiple state variables into one state variable in the form of array or object

import { useReducer } from "react";

const emptyData = {
    id: '',
    name: '',
    dept: '',
    city: ''
}

// Always declare the reducer function outside of component
function reducer(state, action){
    return {...state, [action.field] : action.value};
}
// The returned value of this function will become updated value of state variable

function UseReducerHook(){

    const [state, dispatch] = useReducer(reducer, emptyData);
    // state - state variable which actually holds data
    // dispatch - dispatch function is called to set value of action parameter
        // The parameter passed to dispatch() method will become value of action parameter of reducer function
    // reducer - a function internally called by dispatch method to change value of state variable
    // emptyData - initial data

    function handleClick(){
        if(!state.name || !state.id || !state.dept || !state.city)
            alert('Please provide all details');
        else
            alert('User Logged in with username ' + state.name);
    }

    return (
        <div style={{textAlign:'center'}}>
            <h2>Use of UseReducerHook</h2>
            <br />

            <input type="text" value={state.id} onChange={(e) => dispatch({field: 'id', value: e.target.value})} placeholder="Enter your id" />
            <br /><br />
            <input type="text" value={state.name} onChange={(e) => dispatch({field: 'name', value: e.target.value})} placeholder="Enter your name" />
            <br /><br />
            <input type="text" value={state.dept} onChange={(e) => dispatch({field: 'dept', value: e.target.value})} placeholder="Enter your dept" />
            <br /><br />
            <input type="text" value={state.city} onChange={(e) => dispatch({field: 'city', value: e.target.value})} placeholder="Enter your city" />
            <br /><br />

            <button type="submit" onClick={handleClick}>Submit</button>
            <br />

            {/* Displaying state values on webpage */}
            <ul style={{listStyle:'none'}}>
                <li>Id : {state.id}</li>
                <li>Name : {state.name}</li>
                <li>Dept : {state.dept}</li>
                <li>City : {state.city}</li>
            </ul>
        </div>
    )
}

export default UseReducerHook;