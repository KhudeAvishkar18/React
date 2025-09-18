// Styled Component is not part of react, we need to install it explicitly by using command -
// npm i styled-components

// To check whether it is installed successfully, we can check under dependencies inside package.json file

// To use it in our code, first we need to import it
import styled from "styled-components"

// We call them styled components because actually they are Components

// We can create styled components in 2 ways
/* syntax - 

const ComponentName = styled.htmlElementName`
    // cssProperties here
`

// Or

const ComponentName = styled.htmlElementName({
    // cssProperties here
})

*/

// 1st way is by using `` (backticks)

const Heading1 = styled.h1`
color:blue;
text-align:center;
`

// 2nd way is by making object of css properties

const Heading2 = styled.h2({
    color:"green",
    textAlign:"center"
})

// Making button using styled component

const Btn = styled.button({
    backgroundColor:"yellow",
    cursor:"pointer"
})

// Like this we can make any html element using styled components and use them in our actual components

function StyledComponent() {
    return (
        <>
            {/* Using styled components to create actual components */}
            <Heading1>Styled Components</Heading1>
            <Heading2>Lets use them</Heading2>
            <Btn>Click Me</Btn>
        </>
    )
}

export default StyledComponent;