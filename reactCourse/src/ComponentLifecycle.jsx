import { useEffect, useState } from "react";

function ComponentLifecycle() {

    const [counter, setCounter] = useState(0);

    // React component lifecycle contains 3 phases : 1) Mount, 2) Update, 3) Unmount
    // 1) Mount means display the component
    // 2) Update means make any changes in component using rerender of component due to states or props
    // 3) Unmount means hide the component
    // We can handle all phases of component lifecycle using useEffect() hook

    // 1) Mount : When we give empty array as dependency in useEffect() hook, it is called Mount phase.
    useEffect(() => {
        // This code will run on mount
        console.log('Mounting phase called');
    }, []);

    // 2) Update : When we give some states/props in array as dependency in useEffect() hook, it is called Update phase.
    useEffect(() => {
        // This code will run on updation of current component due to state or prop
        console.log('Updating phase called');
    }, [counter]);

    // 3) Unmount : When we return a function in useEffect() hook, it is called Unmount phase.
    useEffect(() => {
        return () => {
            // This code will run on unmount i.e. when current component is hidden
            console.log('Unmount phase called');
        }
    }, []);
    // Whenever current component will get hidden, unmount code will run

    return (
        <>
            <h3>Component Lifecycle</h3>
            <button onClick={() => setCounter(counter + 1)}>Click Me</button>
        </>
    )
}

export default ComponentLifecycle;