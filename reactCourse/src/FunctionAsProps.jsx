function FunctionAsProps(){

    function sum(a, b){
        return a+b;
    }

    return (
        <>
            <h1>Passing function as props</h1>
            {/* Passing function as prop */}
            <AnotherComponent add={sum}/>
            {/* We cant pass events as props */}
        </>
    )
}

export default FunctionAsProps;

{/* Accessing function as prop using {} - curly braces */}
export function AnotherComponent({ add }){
    return(
        <>
            <h2>AnotherComponent</h2>
            <h3>{add(2,5)}</h3>
        </>
    )
}