function NewComponent() {
    return (
        <>
            <h1>This is new component</h1>
        </>
    )
}

export default NewComponent;


// We can have multiple components in one file.
// In one file/module, there can be only one defualt export, others can be named export components
// The main/primary component is default exported, for others we will write export in front of component definition to make them named export.

export function NewComponent1(){
    return(
        <>
            <h1>This component is named export</h1>
        </>
    )
}

export function NewComponent2(){
    return(
        <>
            <h1>This component is another named export</h1>
        </>
    )
}

// Not only components, but we can export functions, variables, constants etc.