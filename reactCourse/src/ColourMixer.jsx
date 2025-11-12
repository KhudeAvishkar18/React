import { useState } from "react";

function ColourMixer() {

    // Accessing color values from local Storage
    const colors = JSON.parse(localStorage.getItem('color'));
    const [red, setRed] = useState(colors ? colors.red : 0);
    const [green, setGreen] = useState(colors ? colors.green : 0);
    const [blue, setBlue] = useState(colors ? colors.blue : 0);
    // Initially there will be no values in localStorage, hence color values will be 0

    function save() {
        // Saving colour values as object inside localStorage of this react application
        localStorage.setItem('color', JSON.stringify({ red, green, blue }));
        // You can view localStorage inside inspect page, inside Application tab, inside Local storage field
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Colour Mixer</h2>

            <div className="display" style={{ height: '200px', width: '200px', backgroundColor: `rgb(${red}, ${green}, ${blue})`, margin: '20px auto' }}></div>

            <label htmlFor="red">Red - {red}</label>
            <input type="range" defaultValue={red} name="red" id="red" min={0} max={255} onChange={(e) => setRed(e.target.value)} />

            <label htmlFor="green">Green - {green}</label>
            <input type="range" defaultValue={green} name="green" id="green" min={0} max={255} onChange={(e) => setGreen(e.target.value)} />

            <label htmlFor="blue">Blue - {blue}</label>
            <input type="range" defaultValue={blue} name="blue" id="blue" min={0} max={255} onChange={(e) => setBlue(e.target.value)} />

            <br /><br />
            <button style={{ cursor: 'pointer', padding: '5px' }} onClick={save}>Save Colour</button>
        </div>
    )
}

export default ColourMixer;