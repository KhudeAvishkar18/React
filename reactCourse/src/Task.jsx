function Task() {
    return (
        <>
            <h1>Avishkar Khude todos</h1>
            <ul>
                <li>Wake up</li>
                <li>Excercise</li>
                <li>Job</li>
                <li>Study</li>
            </ul>
            {/* Function Hoisting - Means calling function before declaring it */}
            <button onClick={callFun}>Click Me</button>
            {/* Generally function hoisting is allowed but variable, object hoisting is now allowed */}
        </>
    )
}

function callFun() {
    alert('Button Clicked');
}

export default Task;