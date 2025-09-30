import { useState } from "react";

// Derived state is a state that is calculated or derived from other state or props values within our component.
// Derived state can be a variable or a constant.
// Because of Derived state, there is no need of extra state, only variables or constants are enough
// As variables are lightweight as compared to states, hence using Derived states will improve performance of our react application.

function DerivedState() {
    const [users, setUsers] = useState([]); // users state containing array of users
    const [eachUser, setEachUser] = useState(''); // eachUser state contains one user at a time

    function addUser() {
        setUsers([...users, eachUser]);
    }

    // Below variables are called derived states, as they are calculated (derived) by using 'users' state variable.
    const total = users.length;
    const last = users[users.length-1];
    const uniqueCount = [...new Set(users)].length; // Passing users array to Set, because set can only have unique elements, again separating each element of Set using ... spread operator and storing them in an array, getting length of that array as value of uniqueCount variable
    // Instead of making new state variables, we used this constants which are nothing but derived states

    return (
        <>
            <h2>Total Users : {total}</h2>
            <h2>Last User : {last}</h2>
            <h2>Total Unique Users : {uniqueCount}</h2>

            {/* Take user name as input */}
            <input type="text" onChange={(event) => setEachUser(event.target.value)} placeholder="Enter your name" />

            {/* On button click, add that user in users array */}
            <button onClick={addUser}>Add user</button>

            {/* Show each user from users array using map() method */}
            {users.map((user, index) => <h2 key={index}>{user}</h2>)}

        </>
    )
}

export default DerivedState;