import useToggle from "./useToggle";
// import custom hook from wherever you created it
// Open this useToggle.jsx file present at above path for more clarity about this custom hook

function CustomHook() {

    // Using custom hook
    const [isTrue, toggleHandler] = useToggle(true);    // Setting default value of isTrue as true
    // isTrue is boolean state variable
    // toggleHandler is function to set/toggle state value

    const [isTrue2, toggleHandler2] = useToggle(true);  // Another useToggle hook

    return (
        <>
            {/* Calling toggleHandler function on button click to toggle, hide or show the component */}
            <button onClick={() => toggleHandler('nonBoolean')}>Toggle</button>
            <button onClick={() => toggleHandler(false)}>Hide</button>
            <button onClick={() => toggleHandler(true)}>Show</button>

            {/* If isTrue state is true, then display below component, otherwise display nothing */}
            {
                isTrue ? <h2>Using Custom Hook</h2> : null
            }

            <hr />

            {/* Using another instance of useToggle hook */}
            <button onClick={() => toggleHandler2('nonBoolean')}>Toggle</button>
            <button onClick={() => toggleHandler2(false)}>Hide</button>
            <button onClick={() => toggleHandler2(true)}>Show</button>

            {/* If isTrue state is true, then display below component, otherwise display nothing */}
            {
                isTrue2 ? <h2>Using Custom Hook Again</h2> : null
            }
        </>
    )
}

export default CustomHook;