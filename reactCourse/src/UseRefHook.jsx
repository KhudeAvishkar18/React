// UseRef hook is used to take control (reference) of any html element, and perform some action on that element

import { useRef } from "react";

function UseRefHook() {

    const inputElement = useRef(null);
    // Inside inputElement variable, we will get entire html input element along with its properties 

    const heading2 = useRef(null);

    function inputHandler(inElement) {
        inElement.current.focus();
        inElement.current.placeholder = 'Enter your name';
        // inputElement.current.value = 'Avishkar';
        inElement.current.style.color = 'red';
    }

    function toggleInput(inElement) {
        if (inElement.current.style.display === 'none')
            inElement.current.style.display = 'inline';
        else
            inElement.current.style.display = 'none';
    }

    return (
        <>
            <h1>Use of UseRef hook</h1>

            {/* Take control of 'input' html element */}
            <input ref={inputElement} type="text" placeholder="Enter something" />
            {/* 'ref' attribute will bind html inupt tag with inputElement useRef hook */}

            <button onClick={() => inputHandler(inputElement)}>Click to Focus</button>
            <button onClick={() => toggleInput(inputElement)}>Toggle Input</button>


            {/* Take control of 'h2' html element */}
            <h2 ref={heading2}>How are you guys</h2>

            <button onClick={() => heading2.current.style.color = 'blue'}>Change h2's color</button>

            {/* In this way you can take reference of any html element by using useRef hook and make changes to that element on some event occurrence */}
        </>
    )
}

export default UseRefHook;