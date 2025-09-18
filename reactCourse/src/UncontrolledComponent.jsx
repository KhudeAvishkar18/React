// A controlled component is a component, which contains some input fields whose values are accessed by using state variables
// A react component in which we try to access value of input field without using react states, it is called uncontrolled components
// We can access input fields value by using document.getElementbyId, querySelector and using useRef() hooks as well.

import { useRef } from "react";

function UncontrolledComponent() {
    const InputRef = useRef(null);  // reference variable will be initialised to null

    function logInputValue(inputref) {
        console.log(inputref.current.value);
    }

    function getInputValue() {
        // To disable default reloading of page after clicking any button due to using form, we can write
        // event.preventDefault(); 
        let input = document.querySelector('input');
        console.log(input.value);
        // Here we are accessing input tags value directly by using DOM, without using react states
    }

    return (
        <>
                <input type="text" ref={InputRef} placeholder="Enter your name" />
                {console.log(InputRef)}  {/* Contains entire html input element */}
                
                {/* Accessing using DOM */}
                <button onClick={getInputValue}>GetInputValueUsingQuerySelector</button>

                {/* Accessing using useRef hook */}
                <button onClick={() => logInputValue(InputRef)}>GetInputValueUsingUseRef</button>

                {/* In controlled components we access input fields value using state variables */}

        </>
    )
}

export default UncontrolledComponent;