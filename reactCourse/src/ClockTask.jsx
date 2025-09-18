import { useState } from "react";

export function Clock({ colour }) {

    const [time, setTime] = useState('');

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        // new Date().toLocaleTimeString() returns current time in string format
    }, 1000);

    return (
        <>
            <div className="clock" style={{ height: "50px", width: "200px", backgroundColor: "black", color: colour, display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0px" }}>
                {/* alignItems align items vertically */}
                {/* justifyContent align items horizontally */}
                <h2>{time}</h2>
            </div>
        </>
    )
}


function ShowClock() {
    const [colour, setColour] = useState('yellow');
    return (
        <>
            <h1>Digital Clock</h1>

            <select onChange={(event) => setColour(event.target.value)} >
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
            </select>

            <Clock colour={colour} />
        </>
    )
}

export default ShowClock;