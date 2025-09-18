import { useState } from "react";

function Radio_Dropdowns() {

    const [language, setLanguage] = useState('Java');
    const [gender, setGender] = useState('Female');

    return (
        <>
            {/* Radio Buttons */}
            <h3>Select your favourite language</h3>

            <input type="radio" name="language" id="c++" value="C++" checked={language === 'C++'} onChange={(event) => setLanguage(event.target.value)} />
            {/* Due to 'name' attribute we can able to link multiple radio buttons with each other, so that at a time only one radio button can be selected */}
            {/* 'id' attribute links input tag with corresponding label tag using htmlFor attribute of label tag */}
            {/* 'value' attribute contains value of input element */}
            {/* 'checked' attribute takes condition as value, if condition is true then corresponding element will be checked by default */}
            {/* 'onChange' event allows us to track any event (change) happend in input element */}

            <label htmlFor="c++">C++</label>
            {/* Because of label tag, if we click on text inside label tag, then also we can able to select the radio button corresponding to that label tag */}
            <br></br>

            <input type="radio" name="language" id="Java" value="Java" checked={language === 'Java'} onChange={(event) => setLanguage(event.target.value)} />
            <label htmlFor="Java">Java</label>
            <br></br>

            <input type="radio" name="language" id="Python" value="Python" checked={language === 'Python'} onChange={(event) => setLanguage(event.target.value)} />
            <label htmlFor="Python">Python</label>
            <br></br>

            <h4>{language}</h4>


            {/* Dropdowns */}

            <h3>Select your gender</h3>

            <select defaultValue={'Female'} onChange={(event) => setGender(event.target.value)}>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Other" >Other</option>
                {/* instead of 'defaultValue' attribute in select, you can use 'selected' attribute in option tag */}
                {/* <option value="Male" selected={gender==='Male'}>Male</option> */}
            </select>

            <h4>{gender}</h4>
        </>
    )
}

export default Radio_Dropdowns;