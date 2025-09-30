import { useState } from "react";

// To create a custom hook, we need to create a function which will return hook elements
// Inidirectly hook is nothing but a function which returns something

// This is a function, not a component, hence defaultValue is a parameter, not a prop value
function useToggle(defaultValue){
    const [state, setState] = useState(defaultValue);
    // We can use predefined or custom hooks inside another custom hooks

    function toggleDisplay(val){
        if(typeof val !== 'boolean')
            setState(!state);   // if val is not boolean, toggle state
        else
            setState(val);  // if val is boolean, set it as state value
    }

    return [state, toggleDisplay];
    // returning array of 2 elements, 1st is state another is function
    // There we will use array destructuring to get values from this array
}

export default useToggle;