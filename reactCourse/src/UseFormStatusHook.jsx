import { useFormStatus } from 'react-dom';
// useFormStatus hook gives us a state variable called 'pending' by using which we can determine whether the form submitted or still pending
// And if pending = true, that means form is submitting, at that time we can make some changes in our component 

// To use this hook, we compulsorily need to use html form in our component.

function UseFormStatusHook() {

    const inputStyle = { display: "block", margin: "15px 0px" };

    async function handleSubmit() {
        await new Promise((res, reject) => setTimeout(res, 2000));
        // Making above line as synchronous line of code using async-await logic, By default js is async
        // Only after wait of 2 seconds, below line will execute
        console.log('Form submitted');
    }

    // It is function, not a component
    function FormData() {
        // object destructuring
        const { pending } = useFormStatus();
        // pending is a state (keyword) variable given by useFormStatus() hook
        // It will true, when form submission started till form submitted successfully, otherwise it will be false
        console.log(pending);   // prints true or false
        return (
            <div>
                <input style={inputStyle} type="text" placeholder="Enter username" />
                <input style={inputStyle} type="password" placeholder="Enter password" />
                <button disabled={pending} type="submit">{pending ? 'Submitting...' : 'Submit'}</button>
                {/* When pending is true, disable button */}
            </div>
        )
    }


    return (
        <>
            <h1>Use of useFormStatus Hook</h1>

            <form action={handleSubmit}>
                {/* action attribute in form is used to send form data when form submitted */}
                <FormData />
                {/* We cant use useFormStatus hook inside html form, hence we created another function for it */}
            </form>
        </>
    )
}

export default UseFormStatusHook;