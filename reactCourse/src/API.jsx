import { useEffect, useState } from "react";

function API() {

    // Users List
    const [users, setUsers] = useState([]);

    // Function to call api and get response
    async function getUsersData() {
        const url = 'https://dummyjson.com/users';
        let usersData = await fetch(url);   // Default get method
        let uData = await usersData.json(); // Converting API response in json object
        let usersList = uData.users;
        // uData is an object after converting response of API in json, inside uData object, there is an array of objects of size 30 containing list of users.
        setUsers([...usersList]);   // Storing users list in users state variable
    }

    // Calling api function only once using useEffect() hook
    useEffect(() => {
        getUsersData();
    }, [])

    // Styling users list
    const ulStyle = {
        display: "flex",
        justifyContent: "space-around",
        margin: "10px",
        listStyle: 'none'
    }

    return (
        <>
            <h2>Using API data in React</h2>
            <br />

            {/* Headings */}
            <ul style={ulStyle}>
                <li><h3>Id</h3></li>
                <li><h3>FirstName</h3></li>
                <li><h3>LastName</h3></li>
                <br />
            </ul>

            {/* api data showing in list format */}
            {
                // Meaning of && is that, if users is not null then (&&) do users.map()
                users && users.map((name) => (
                    <ul style={ulStyle} key={name.id}>
                        <li>{name.id}</li>
                        <li>{name.firstName}</li>
                        <li>{name.lastName}</li>
                        <br />
                    </ul>
                ))
            }
        </>
    )
}

export default API;