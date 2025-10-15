import { useEffect, useState, useTransition } from "react";
import { BrowserRouter, Route, Routes, Link, Outlet, useNavigate } from "react-router";

// Integrating API created by using json-server using fetch() method 

function JsonServerAPI() {

    // Storing api data in data state
    const [data, setData] = useState([]);

    // Using useTransition() hook to show loader while fetching api data
    const [pending, startTransition] = useTransition();

    // useNavigate() hook to route to update page
    const navigate = useNavigate();

    function fetchAPI() {
        startTransition(async () => {
            const url = 'http://localhost:3000/myNewAPI';
            let apiData = await fetch(url);
            apiData = await apiData.json();
            setData([...apiData]);
        })
    }

    // We are not using useEffect(), because we are fetching api data on button click
    // useEffect(() => {
    //     fetchAPI();
    // }, [])

    // Styling users list
    const ulStyle = {
        display: "flex",
        justifyContent: "space-around",
        margin: "10px",
        listStyle: 'none'
    }

    const deleteUser = async (id) => {
        let url = 'http://localhost:3000/myNewAPI';

        // Append id as path parameter, of element which you want to delete
        url = url + `/${id}`;

        // Delete Method
        let response = await fetch(url, {
            method: "DELETE"
        })

        response = await response.json();
        if (response) {
            alert('User Deleted Successfully');
            fetchAPI();
        }

    }

    function setUpdatedData(id) {
        navigate('/updateUser/' + id);
    }

    return (
        <>
            <h2>Using Json Server API</h2>
            <button onClick={fetchAPI} disabled={pending}>Get API Data</button>

            {/* Loader */}
            {pending ? <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="Loader" /> : null}

            {/* Heading */}
            <ul style={ulStyle} >
                <li><h3>Id</h3></li>
                <li><h3>Name</h3></li>
                <li><h3>Sirname</h3></li>
                <li><h3>City</h3></li>
                <li><h3>Action</h3></li>
                <br />
            </ul>

            {/* API Data */}
            {data &&
                data.map((user, index) => (
                    <ul key={index} style={ulStyle} >
                        <li>{user.id}</li>
                        <li>{user.name}</li>
                        <li>{user.sirname}</li>
                        <li>{user.city}</li>
                        <li><button onClick={() => deleteUser(user.id)}>Delete</button>
                            <button onClick={() => setUpdatedData(user.id)}>Edit</button>
                        </li>
                        <br />
                    </ul>
                ))
            }
        </>
    )
}

export default JsonServerAPI;