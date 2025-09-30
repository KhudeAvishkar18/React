import { useState } from "react";

// Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.

// const [user, setUser] = useState(''); // This is the state variable declared in app component

function LiftingStateUp({ setUser }) {
    return (
        <>
            <h2>Lifting State Up</h2>
            <input type="text" placeholder="Enter use name" onChange={(event) => setUser(event.target.value)}/>
        </>
    )
}

export default LiftingStateUp;

export function LiftingStateUp2({ user }) {
    return (
        <>
            <h2>This is User name from another component</h2>
            <h3>{user}</h3>
        </>
    )
}