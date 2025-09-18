import { useState, useEffect } from "react";

// Here we will discuss how to handle side effects happend due to state variables updation
function UseStateHook1() {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    function printOnce() {
        console.log("printOnce() called");
    }

    function printOnlyForOne(){
        console.log("printOnlyForOne called");
    }

    // printOnce();

    // If we call like this, the function will be called twice by default, and for every rerender of the component containing this function.
    // That means every time React renders <Hooks />, it will execute printOnce(). This is kind of side effect.
    // Generally when any state variable is updated, it automatically rerenderes the component in which they are.

    // To get rid of that we will call this function inside useEffect() hook, so that it will not called when Hooks component is rerendered due to change in any state variable.

    useEffect(() => {
        printOnce();
    }, [])
    // [] this means the printOnce() will be executed only once and not for any component rerendered.
    // [] Array is empty means no component rerender will call this printOnce() function.
    // This is how we can control side effects by using useEffect hook.

    // To call that function only when component is rerendered by one state
    useEffect(() => {
        printOnlyForOne();
    }, [counter2])
    // Only when Hooks component is rerendered due to counter2 state, then this useEffect will execute printOnlyForOne() method.

    // We can also use multiple states as dependency
    // useEffect(() => {
    //     printOnlyForOne();
    // }, [counter1, counter2])

    // We can also use props variable as dependency
    // useEffect(() => {
    //     printOnlyForOne();
    // }, [propsVar]) 

    return (
        <>
            <h2>Use of useEffect Hook</h2>

            <button onClick={() => setCounter(counter + 1)}>Click counter1 : {counter}</button>
            <button onClick={() => setCounter2(counter2 + 1)}>Click counter2 : {counter2}</button>
        </>
    )
}

export default UseStateHook1;