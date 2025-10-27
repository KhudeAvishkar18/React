import { useState } from "react";

function AddUser() {
    const [name, setName] = useState('');
    const [sirName, setSirName] = useState('');
    const [city, setCity] = useState('');
    const [id, setId] = useState('');

    async function takeInputValues() {
        const objData = {
            "id": id,
            "name": name,
            "sirName": sirName,
            "city": city
        }

        const url = "http://localhost:3000/myNewAPI";
        // Post Method
        let response = await fetch(url, { method: 'POST', body: JSON.stringify(objData) });
        // Converting response in json object
        response = await response.json();
        // If Success response then alert()
        if (response) {
            alert('New User added');
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Add New User</h3>
            <br />

            <label htmlFor="name">Name : </label>
            <input id="name" placeholder="Enter Name" onChange={(event) => setName(event.target.value)} type="text" />
            <br /><br />

            <label htmlFor="sirname">Sirname : </label>
            <input id="sirname" placeholder="Enter Sirname" onChange={(event) => setSirName(event.target.value)} type="text" />
            <br /><br />

            <label htmlFor="city">City : </label>
            <input id="city" placeholder="Enter City" onChange={(event) => setCity(event.target.value)} type="text" />
            <br /><br />

            <label htmlFor="id">Id : </label>
            <input id="id" placeholder="Enter Id" onChange={(event) => setId(event.target.value)} type="text" />
            <br /><br />

            <button style={{ display: 'block', margin: '20px auto', padding: '10px', backgroundColor: 'lightgreen', cursor: 'pointer' }} onClick={takeInputValues}>Add User</button>
        </div>
    )
}

export default AddUser;