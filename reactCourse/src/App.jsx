// jsx stands for 'JavascriptXML' or 'JavaScript Syntax Extension'
// JSX allows us to write html code inside javascript code

// Importing components
import JsxComponent from "./useJSX";
import NewComponent, {NewComponent1, NewComponent2} from "./newComponent"
import Task from "./Task";
import Events from "./Events";

// default exported component is imported without using {} curly braces
// named exported component is imported by using {} curly braces around them

const myName = 'Avishkar';

// Creating & returning App component
function App() { // Components name should start with capital letters
  return (
    // Entire code which you return must be wrapped in a wrapper like div.
    // Here we are using Fragment tag.
    <>
      {/* Using component */}
      {/* <NewComponent />
      <NewComponent1 />
      <NewComponent2 /> */}

      {/* Using component also calling normal function */}
      {/* <h1>Hello World {sum()}</h1> */}

      {/* Using JSX we can directly use JavaScript variables in html */}
      {/* <p>My name is {myName}</p> */}

      {/* <AnotherComponent /> */}
      {/* <Task /> */}
      {/* <JsxComponent /> */}

      <Events />

    </>
  )
}

// React Component
function AnotherComponent() {
  return (
    <>
      <h2>Another Component</h2>
    </>
  )
}

// Creating all components in App.jsx will make this file more complex, hence we create new file for each new component.
// We can also reuse that components wherever we want by importing them

// Normal Function
function sum(){
  return 10+8;
}

// Exporting App component
export default App;