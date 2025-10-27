import { useActionState } from "react";

function ValidationAdvanced() {

    const handleSubmit = (prevData, formData) => {
        let name = formData.get('username');
        let pass = formData.get('password');
        // username & password is a value of 'name' attribute of any input element

        let regex = /[` ~!@#$%^&*()_\-+=\/{}\[\]:;"'<>,.?]/;

        if (name.length > 5) {
            return { error: 'Username should not be more than 5 characters', name, pass };
        }
        else if (regex.test(pass)) {
            return { error: 'Password should not contain any special character', name, pass };
        }
        else {
            return { message: 'Login Successfull', name, pass };
        }
    }
    // Whatever this function returns will be stored in data element of useActionState() hook


    // Using useActionState hook
    const [data, action, pending] = useActionState(handleSubmit);

    // data - It will contain data returned by handleSubmit method
    // action - it will be given to action attribute of html form
    // pending - it will return true while submission of form, else return false
    // handleSubmit - This function will run for each form submission

    return (
        <>
            <h2>Validation using UseActionStateHook</h2>
            <br />

            <form action={action}>

                {
                    data && (data.message ? <span style={{ color: 'green' }}>{data.message}</span> : <span style={{ color: 'red' }}>{data.error}</span>)
                }

                <br />
                <label htmlFor="username">Username : </label>
                <input id="username" defaultValue={data?.name} name="username" type="text" placeholder="Enter UserName" />
                <br /><br />
                {/* id is used to match particular label element with particular input field */}
                {/* name property will be accessed inside handleSubmit function */}
                {/* defaultValue attribute will keep the value inside input element even after form submission */}

                <label htmlFor="password">Password : </label>
                <input id="password" defaultValue={data?.pass} name="password" type="password" placeholder="Enter Password" />
                <br /><br />

                <button>Submit</button>

            </form>
        </>
    )
}

export default ValidationAdvanced;