import { useState, useEffect } from 'react';

// Here we will learn how to handle side effects happens due to passing props, handle them with useEffect()
function UseEffectHook2({ name }) {

    function callMe() {
        console.log('callMe called');
    }

    // callMe();
    // by default above function call will happen two times, and for every component rerender again that function will be called.
    // As we are accepting a state variable as props for this component, whenever the value of this state variable gets updated the comoponent will be rerendered and in result the function will be called as well.
    // To handle this side effect due to props, we will use useEffect(function, dependencyArray) hook

    // To call function only once
    useEffect(() => {
        callMe();
    }, []);

    // To call function any one props component rerender
    // useEffect(() => {
    //     callMe();
    // }, [name]);

    // To call function for multiple props component rerendered
    // useEffect(() => {
    //     callMe();
    // }, [prop1, prop2, propN]);

    return (
        <>
            <h3>{name}</h3>
        </>
    )
}

export default UseEffectHook2;