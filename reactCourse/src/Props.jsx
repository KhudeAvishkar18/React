// Taking props object

// function Props(props){
//     return(
//         <>
//             <h2>This is Props</h2>
//             <h2>Name : {props.name}</h2>
//             <h2>Id : {props.id}</h2>
//             <h2>Company : {props.company}</h2>
//         </>
//     )
// }

// Taking props variable

// function Props({name, id, company}){
//     return(
//         <>
//             <h2>This is Props</h2>
//             <h2>Name : {name}</h2>
//             <h2>Id : {id}</h2>
//             <h2>Company : {company}</h2>
//         </>
//     )
// }

// Taking object as a props

// function Props({propsObj}){
//     return(
//         <>
//             <h2>This is Props</h2>
//             <h2>Name : {propsObj.name}</h2>
//             <h2>Id : {propsObj.id}</h2>
//             <h2>Company : {propsObj.company}</h2>
//         </>
//     )
// }

// Taking array as a props

// function Props({ propsArr }) {
//     return (
//         <>
//             <h2>This is Props</h2>
//             <h2>My College : {propsArr[3]}</h2>
//             <h2>1st College : {propsArr[0]}</h2>
//             <h2>2nd College : {propsArr[1]}</h2>
//             <h2>3rd College : {propsArr[2]}</h2>
//         </>
//     )
// }

// Taking state variable as a props

// function Props({ name }) {
//     return (
//         <>
//             <h2>My name : {name}</h2>
//         </>
//     )
// }

// Taking function as a props

// function Props({ myFun }){
//     return(
//         <>
//             <h3>{myFun(3, 5)}</h3>
//         </>
//     )
// }

// Setting default Props value
// default props are the values which are used if no actual props are passed

// function Props({ name="Avishkar" }){
//     return(
//         <>
//             <h3>{name}</h3>
//         </>
//     )
// }

// Accessing JSX as Props

function Props({ children, colour = "orange" }) {
    return (
        // Adding inline style to wrapper div
        <div style={{ color:colour, border:"2px solid blue" }}>
            {/* Anything written inside opening and closing tag of a component, is accessed here by using 'children' keyword */}
            {children}
        </div>
    )
}

export default Props;