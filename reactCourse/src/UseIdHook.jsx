import { useId } from "react";

// By using useId() hook we can get unique id every time, which we can use anywhere
// For ex. here we will use that id as id attribute of input tag

function UseIdHook(){
    return (
        <>
            <h2>Use of useId hook</h2>
            <FormComponent />
        </>
    )
}

export default UseIdHook;

export function FormComponent(){
    const id = useId(); // useId() hook generates unique id every time 
    const id1 = useId();
    console.log(id);
    console.log(id1);
    return (
        <>  
            <form action="">
                <label htmlFor={id}>Enter Name : </label>
                <input id={id} type="text" placeholder="Enter name"/>
                {/* Here value of id and htmlFor must be same to link label with particular input tag */}
                <br /><br />
                <label htmlFor={id1}>Enter Password : </label>
                <input id={id1} type="password" placeholder="Enter password"/>
                <br /><br />
                <label htmlFor="terms">Terms and Conditions</label>
                <input id="terms" type="checkbox"/>
            </form>
        </>
    )
}