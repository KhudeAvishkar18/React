import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UpdateUser() {

    const [name, setName] = useState('');
    const [sirName, setSirName] = useState('');
    const [city, setCity] = useState('');
    const [id, setId] = useState('');

    // Accessing path param by using useParams() hook
    const { idParam } = useParams();

    // Using useNavigate() hook to navigate to home page on button click
    const navigate = useNavigate();

    let url = 'http://localhost:3000/myNewAPI';
    url = url + '/' + idParam;

    const getData = async () => {
        let response = await fetch(url);
        response = await response.json();

        // Setting states with api data
        setId(response.id);
        setName(response.name);
        setSirName(response.sirName);
        setCity(response.city);
    }

    useEffect(() => {
        getData();
    }, [])

    const updateUserDetails = async () => {
        let objData = { id, name, sirName, city };

        let response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(objData)
        });

        response = await response.json();
        if (response) {
            alert('Data updated successfully');
            navigate('/');
        }

    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Update User Details</h2>
            <br />

            <label htmlFor="id">Id : </label>
            <input id="id" value={id} placeholder="Enter Id" onChange={(event) => setId(event.target.value)} type="text" />
            <br /><br />

            <label htmlFor="name">Name : </label>
            <input id="name" value={name} placeholder="Enter Name" onChange={(event) => setName(event.target.value)} type="text" />
            <br /><br />

            <label htmlFor="sirname">Sirname : </label>
            <input id="sirname" value={sirName} placeholder="Enter Sirname" onChange={(event) => setSirName(event.target.value)} type="text" />
            <br /><br />

            <label htmlFor="city">City : </label>
            <input id="city" value={city} placeholder="Enter City" onChange={(event) => setCity(event.target.value)} type="text" />
            <br /><br />

            <button style={{ display: 'block', margin: '20px auto', padding: '10px', backgroundColor: 'yellow', cursor: 'pointer' }} onClick={updateUserDetails}>Update User</button>
        </div>
    )
}

export default UpdateUser;