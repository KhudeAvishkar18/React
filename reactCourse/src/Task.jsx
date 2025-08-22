function Task(){
    return (
        <>
            <h1>Avishkar Khude todos</h1>
            <ul>
                <li>Wake up</li>
                <li>Excercise</li>
                <li>Job</li>
                <li>Study</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
        </>
    )
}

function callFun(){
    alert('Button Clicked');
}

export default Task;