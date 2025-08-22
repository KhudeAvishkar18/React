function clickBtn() {
    alert("Button Clicked");
}

function clickAnotherBtn(name) {
    alert("Button clicked by " + name);
}

function Events() {
    return (
        <>
            {/* To pass a function without parameters */}
            <button onClick={clickBtn}>Click me</button>

            {/* To pass a function which takes parameters */}
            <button onClick={() => clickAnotherBtn("Avishkar")}>Click me</button>
        </>
    )
}

export default Events;