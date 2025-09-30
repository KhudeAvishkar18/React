import { useActionState, useState, useTransition } from "react";

// useActionState hook updates state based on result of form action
// It is used to perform some action on html form submission

function UseActionStateHook() {

    async function handleSubmit(previousData, formData) {
        // Adding delay in submission
        await new Promise((res) => setTimeout(res, 2000));

        // Accessing name and password from input field of form
        let name = formData.get("name");
        let password = formData.get("password")

        // Setting 'data' element, by returning an object
        if (name && password)
            return { message: "Data submitted successfully", name, password };
        else
            return { error: "Failed to submit form, please provide data properly", name, password };
    }

    // Using useActionState hook
    const [data, action, isPending] = useActionState(handleSubmit, undefined);

    // It takes 2 parameters, 1) function to execute on form submission, 2) initial value of data element
    // It gives us 3 elements : data, action and pending
    // In 'data', value returned by handleSubmit function will be stored
    // 'action' is the function we need to pass to action attribute of html form to connect html form with useActionState hook
    // 'pending' state is boolean that is true while submission is in progress


    return (
        <>
            <h2>Using useActionState Hook</h2>

            <form action={action}>
                <input type="text" defaultValue={data?.name} placeholder="Enter name" name="name" />
                <br /><br />
                <input type="password" defaultValue={data?.password} placeholder="Enter password" name="password" />
                {/* If data is not null/undefined, then get data.password as default value */}
                <br /><br />
                <button disabled={isPending}>Submit</button>
                <br /><br />
            </form>

            {/* Showing result of form submission by using 'data' element */}
            {
                data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
            }
            {
                data?.message && <span style={{ color: 'green' }}>{data?.message}</span>
            }
            {/* 
            condition && value
            Above syntax returns:
                value if condition is truthy.
                false if condition is falsy.
            */}

            {/* Displaying username and password entered by user */}
            <h2>UserName : {data?.name}</h2>
            <h2>Password : {data?.password}</h2>
        </>
    )
}

export default UseActionStateHook;











// Without using useActionState Hook

// const [userName, setUserName] = useState('');
// const [password, setPassword] = useState('');
// const [pending, startTransition] = useTransition();
// const [result, setResult] = useState('');
// const [displayDetails, setDisplayDetails] = useState(false);

// function handleForm(){
//     startTransition(async()=>{
//         await new Promise((res) => setTimeout(res, 2000));
//         if(userName === '' || password === '')
//             setResult('Please provide both values');
//         else{
//             setResult("Data submitted successfully");
//             setDisplayDetails(true);
//         }
//     })
// }


/* <input type="text" onChange={(event) => setUserName(event.target.value)} placeholder="Enter name"/>
<br /><br />
<input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Enter password"/>
<br /><br />
<button type="submit" onClick={handleForm} disabled={pending}>{pending?'Submitting':'Submit'}</button>
<br /><br />
<p style={{display:result===''?'none':'block', color:result==='Data submitted successfully'?'green':'red'}}>{result}</p>
<h2>UserName : {displayDetails?userName:null}</h2>
<h2>Password : {displayDetails?password:null}</h2> */