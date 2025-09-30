// Pure function is a function which gives same result on same input
// ex.
function sum(a, b){
    return a+b;
}
// Above function will always give 20 if a = 10 and b = 10

// Pure Component is a component which doesnt modify values outside of component
// ex.
let counter = 0;

function PureComponent(){
    counter = counter + 1;  
    // As this component is modifying outside variable, it is no more a pure component
    return (
        <>
            <h2>PureComponent</h2>
            {counter}
            {/* Also you can notice, I incremented value of counter by 1 but above it is showing 2 which is weired behaviour, and that is because this component is getting rendered twice */}
            {/* In this way, as we modified value outside the component hence component became impure */}

            {/* If you are taking values as props inside component and modifying them, it will not make your component impure */}
        </>
    )
}

export default PureComponent;