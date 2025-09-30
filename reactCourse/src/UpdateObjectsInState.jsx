import { useState } from "react";

// Here we will learn how to change/modify values of object stored in state variable

function UpdateObjectInState() {

    // State variable obj, contains nested object in it
    const [obj, setObj] = useState(
        {
            name: "Avishkar",
            address: {
                city: "Pune",
                country: "India"
            }
        }
    );

    // My Approach
    // function changeName(val){
    //     setObj({...obj, name:val}) // Setting value of obj as original obj and updated name value
    // }
    // Modifying nested elements
    // function changeCity(val){
    //     setObj({...obj, address:{...obj.address, city:val}})
    // }
    // function changeCountry(val){
    //     setObj({...obj, address:{...obj.address, country:val}})
    // }

    // Video approach
    function changeName(val) {
        obj.name = val; // This will change only object value, but it will not update state variable
        // If you change anything inside state like this, state will not get aware of any change
        // Hence we need to always call setState function to update the state variable
        setObj({ ...obj }) // This will update state variable, by accepting updated object
    }
    // Modifying nested elements
    // My approach
    function changeCity(val) {
        obj.address.city = val; // This will change object value but it will not update state variable
        setObj({ ...obj}) // This will update state variable, by accepting updated object
    }
    // Another way to modify nested element
    // Video approach
    function changeCountry(val) {
        obj.address.country = val; // This will change object value but it will not update state variable
        setObj({ ...obj, address: { ...obj.address, val } }) // This will update state variable, by accepting updated object
    }


    return (
        <>
            <h3>Updating objects in state</h3>

            Name : {obj.name}
            <br />

            City : {obj.address.city}
            <br />

            Country : {obj.address.country}
            <br />

            {/* Taking input from user to modify object values */}
            <input type="text" placeholder="Update name" onChange={(event) => changeName(event.target.value)} />
            <input type="text" placeholder="Update city" onChange={(event) => changeCity(event.target.value)} />
            <input type="text" placeholder="Update country" onChange={(event) => changeCountry(event.target.value)} />
        </>
    )
}

export default UpdateObjectInState;