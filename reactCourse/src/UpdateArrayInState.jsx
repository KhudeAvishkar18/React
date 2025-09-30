import { useState } from "react";

function UpdateArrayInState(){
    let [arr, setArr] = useState([1, 2, 3, 4, [4.1, 4.2, 4.3], 5, {id:1194, name:"Avishkar"}]);
    // This is js array which is allowing us to enter various types of data in an array
    // Generally array contains similar type of data

    // Modifying value of normal array element
    function handleFirst(val)
    {
        arr[0] = val;
        setArr([...arr]);   // separate all elements of array, make new array from them
    }

    // Modifying value of nested array element
    function handleNestedArray(val){
        arr[4][0] = val;
        setArr([...arr]);
    }

    // Modifying value of object nested inside an array
    function handleNestedObject(val){
        arr[6].id = val;
        setArr([...arr]);
    }
    return (
        <>
            <h2>Updating array in State</h2>
            
            {/* Displaying array elements */}
            arr[0] = {arr[0]}
            <br />
            arr[4][0] = {arr[4][0]}
            <br />
            arr[6].id = {arr[6].id};
            <br />

            {/* Taking input from user to modify array values */}
            <input type="number" placeholder="Enter arr[0]" onChange={(event) => handleFirst(event.target.value)}/>
            <input type="number" placeholder="Enter arr[4][0]" onChange={(event) => handleNestedArray(event.target.value)}/>
            <input type="number" placeholder="Enter arr[6].id" onChange={(event) => handleNestedObject(event.target.value)}/>

        </>
    )
}

export default UpdateArrayInState;