import { useState } from 'react';

function CheckBoxes() {

    const [skills, setSkills] = useState([]);

    // To access checked or unchecked status of checkbox, use 'event.target.checked' keyword
    // returns true if checked, else false if unchecked

    const handleOnChange = (event) => {
        if (event.target.checked)
            // Spread operator (...) is used to separate or unpack elements of an iterable element
            setSkills([...skills, event.target.value])
            // Separate all elements of skills array using Spread operator, combine event.target.value with that array elements and form new array, set that array as value of skills state variable using setSkills method.
        else
            setSkills([...skills.filter((val) => val !== event.target.value)]);
            // filter only those array elements whose value not equals current event.target.value
    }

    return (
        <>
            <h2>Choose your Skills</h2>

            <input type="checkbox" id='c++' value='c++' onChange={handleOnChange} />
            {/* Because of id attribute input tag is linked with label tag */}
            {/* onChange event tracks any change made to input element */}
            <label htmlFor='c++'> C++ </label>
            {/* Because of label tag, if we click on text inside label tag then also we can able to check the checkbox */}
            <br></br>

            <input type="checkbox" id='java' value='java' onChange={handleOnChange} />
            <label htmlFor='java'> JAVA </label>
            <br></br>

            <input type="checkbox" id='python' value='python' onChange={handleOnChange} />
            <label htmlFor='python'> Python </label>
            <br></br>

            <h2>{skills}</h2>
        </>
    )
}

export default CheckBoxes;