// Passing reference of any html element from one component to another (as props) is called Forward ref

import { useRef } from 'react';

function ForwardRef() {
    // Creating reference variable using useRef hook
    const InputField = useRef(null);
    
    // Making change in input field present in another component by using its reference variable
    function handleInput(inField) {
        inField.current.focus();
        inField.current.value = 5000;
        inField.current.style.color = 'red';
    }

    return (
        <>
            <h2>Use of ForwardRef</h2>

            {/* Passing reference variable as prop */}
            <AnotherComponent refVar={InputField} />
            
            {/* Entire input tag reference will be there in InputField refVar */}
            {console.log(InputField)}

            {/* Handling click event */}
            <button onClick={() => handleInput(InputField)}>Update Input from Another Component</button>
            {/* This is how we can make changes in any element present in some other component, by using its reference variable */}
        </>
    )
}

export default ForwardRef;

function AnotherComponent({ refVar }) {
    return (
        <>
            <input ref={refVar} type="text" placeholder="Enter your name" />
        </>
    )
}