// importing useState by using hooks
import { useState } from 'react';

// const [nameState, setNameState] = useState("Avishkar"); 
// Dont create state here, create inside component function
// If you create here, it wont be accessible inside component function.

function States() {

    // Creating state
    const [nameState, setNameState] = useState("Avishkar");
    // here nameState is the state variable
    // setNameState is the function which will update the state variables value
    // "Avishkar" is the initial value passed to nameState variable

    function changeName() {
        // Calling function to Change states value
        setNameState("Aniket");
    }
    
    const [isTrue, setIsTrue] = useState("true");
    
    const [display, setDisplay] = useState(true);
    
    const [newDisplay, setNewDisplay] = useState("null");
    
    const [counter, setCounter] = useState(1);

    return (
        <>
            {/* Using state variable in html element */}
            <button onClick={changeName}>Change the name</button>
            <h3>Name : {nameState}</h3>

            {/* Setting state value conditionally */}
            <button onClick={() => 
                    isTrue === "true" ? setIsTrue("false") 
                    : setIsTrue("true")
                }>Toggle value</button>
            <h3>{isTrue}</h3>

            {/* Toggling to show/hide the element using states */}
            <button onClick={() => 
                    display === true ? setDisplay(false) 
                    : setDisplay(true)
                }>Toggle to hide/show</button>
            {/* Logic to display or hide the element */}
            {
                display ? <h3>Show content</h3> : null
            }

            {/* Adding if, else-if, else conditions */}
            <button onClick={() => 
                    newDisplay === "true" ? setNewDisplay("false")
                    : newDisplay === "false" ? setNewDisplay("null")
                    : setNewDisplay("true")
                }>Toggle to hide/show</button>
            {
                newDisplay === "true" ? <h3>Condition is true</h3>
                : newDisplay === "false" ? <h3>Condition is false</h3>
                : <h3>Condition is null</h3>
            }

            {/* Adding multiple conditions */}
            <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
            <h3>Counter : {counter}</h3>
            {
                counter===1?<h3>Counter condition is 1</h3>
                :counter === 2 ? <h3>Counter condition is 2</h3>
                :counter === 3 ? <h3>Counter condition is 3</h3>
                :counter === 4 ? <h3>Counter condition is 4</h3>
                :counter === 5 ? <h3>Counter condition is 5</h3>
                :<h3>Counter condition is more than 5</h3>
            }
        </>
    )
}

export default States;