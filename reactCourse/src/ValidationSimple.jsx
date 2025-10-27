import { useState, useEffect } from "react";

function ValidationSimple() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isNameError, setIsNameError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);

    useEffect(() => {

        // Name validation
        if (name.length > 5) {
            setIsNameError(true);
        }
        else{
            setIsNameError(false);
        }

        // Password validation
        let regex = /[` ~!@#$%^&*()_\-+=\/{}\[\]:;"'<>,.?]/;
        if (regex.test(password)) {
            setIsPasswordError(true);
        }
        else{
            setIsPasswordError(false);
        }
        // .test() is a method that belongs to regular expressions (RegExp) in JavaScript
        // regex.test(string)
        // true (test passed) → if the string matches the regex pattern, false (test failed) → if it doesn’t match

    }, [name, password]); // This block rerendered only when name or password states changes

    return (
        <>
            <h2>Validation of Data</h2>
            <br />

            {/* Name element */}
            <label htmlFor="name">Name : </label>
            <input
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
            />

            {/* Name Validation */}
            {isNameError && (
                <h4 style={{ color: 'red' }}>Name should be less than 5 characters</h4>
            )}

            <br />

            {/* Password Element */}
            <label htmlFor="password">Password : </label>
            <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
            />

            {/* Password validation */}
            {isPasswordError && (
                <h4 style={{ color: 'red' }}>
                    Password should not contain any special character
                </h4>
            )}

            {/* Submit button */}
            <button disabled={isNameError || isPasswordError} style={{ display: 'block' }}>
                Submit
            </button>
        </>
    );
}

export default ValidationSimple;
