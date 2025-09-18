import { useState } from "react";

function ControlledComponent(){
    // A controlled component is a component, which contains some input fields which are controlled by React state

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return(
        <>
            <h3>Enter your details</h3>

            {/* To access value from input field, use 'event.target.value' keyword */}
            {/* <input type="text" onChange={(event) => console.log(event.target.value)} /> */}

            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name"/>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password"/>
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email"/>

            <button onClick={() => {setName(''); setPassword(''); setEmail('');}}>Clear</button>

            <h3>{name}</h3>
            <h3>{password}</h3>
            <h3>{email}</h3>
        </>
    )
}

export default ControlledComponent;