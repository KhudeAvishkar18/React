import { useState, useTransition } from "react";

// useTransition hook is used to take some action while form is submitting, or while we are getting some response from an api
// for ex. while getting response from any api, we can show loader on screen
// We can do that using 'states' as well as by using 'useTransition' hook

// Difference between 'useFormStatus' hook and 'useTransition' hook is :
// useFormStatus hook will only work when our component contains html form, and on submission of form it will work
// useTransition hook can be used without using html form, just on button click also we can perform same action

function UseTransitionHook() {

    // Using states to get the work done
    const [pend, setPending] = useState(false);

    // Using useTransition hook
    const [pending, startTransition] = useTransition();
    // 'pending' is state, 'startTransition' is function

    // Handling pending state by using 'states'
    async function handleClick() {
        setPending(true);

        // Making wait of 2 seconds
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        // Generally here we will call an api which will take some time to give response back

        console.log('First button Submitted successfully');
        setPending(false);
    }

    // Handling pending state by using 'useTransition' hook
    async function handleSubmit() {
        startTransition(async () => {
            // Generally here we will call an api which will take some time to give response back
            await new Promise((res, rej) => setTimeout(res, 2000)); // Adding 2 seconds waiting time
            console.log('Second button Submitted successfully');
            // Until program control is inside this function, value of pending state will be true
        })
        // startTransition function takes function as parameter, inside that function we can mention, what needs to be happen when the pending state is true that means our form is getting submitted or api is fetching data
    }

    return (
        <>
            <h2>Use of useTransitionHook</h2>

            {/* Handling using state */}
            <button disabled={pend} onClick={handleClick}>{pend ? 'Submitting...' : 'Submit'}</button>

            {/* Showing loader for first button */}
            {pend ? <img style={{ width: "200px" }} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loadingImage" /> : null}

            {/* Handling using useTransition hook */}
            <button disabled={pending} onClick={handleSubmit}>{pending ? 'Clicking...' : 'Click'}</button>

            {/* Showing loader for second button */}
            <img style={{ display: pending ? 'inline' : 'none', width: "200px" }} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loadingImage" />
        </>
    )
}

export default UseTransitionHook;