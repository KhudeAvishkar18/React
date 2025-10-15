// jsx stands for 'JavascriptXML' or 'JavaScript Syntax Extension'
// JSX allows us to write html code inside javascript code

// Importing components
import JsxComponent from "./useJSX";
import NewComponent, { NewComponent1, NewComponent2 } from "./newComponent";
import Task from "./Task";
import Events from "./Events";
import States from "./States";
import { useState, useEffect } from "react";
import Props from "./Props";
import ControlledComponent from "./ControlledComponent";
import CheckBoxes from "./CheckBoxes";
import Radio_Dropdowns from "./Radio_Dropdowns";
import Loops from "./Loops";
import ShowClock from "./ClockTask";
import NestedLooping from "./NestedLooping";
import UseEffectHook1 from "./UseEffectHook1";
import UseEffectHook2 from "./UseStateHook2";
import ComponentLifecycle from "./ComponentLifecycle";
import ReactStyle from "./ReactStyle";
import ExternalStyle from "./ExternalStyle";
import CssModules from "./CssModules";
import StyledComponent from "./StyledComponent";
import BootStrap from "./BootStrap";
import UseRefHook from "./UseRefHook";
import UncontrolledComponent from "./UncontrolledComponent";
import FunctionAsProps from "./FunctionAsProps";
import ForwardRef from "./ForwardRef";
import UseFormStatusHook from "./UseFormStatusHook";
import UseTransitionHook from "./UseTransitionHook";
import PureComponent from "./PureComponent";
import DerivedState from "./DerivedState";
import LiftingStateUp from "./LiftingStateUp";
import { LiftingStateUp2 } from "./LiftingStateUp";
import UpdateObjectState from "./UpdateObjectsInState";
import UpdateArrayInState from "./UpdateArrayInState";
import UseActionStateHook from "./UseActionStateHook";
import UseIdHook from "./UseIdHook";
import FragmentTag from "./FragmentTag";
import CustomHook from "./CustomHook";
import College from "./ContextAPI";
import ReactRouter from "./ReactRouter";
import NewNavbar from "./Navbar";
import NotFound from "./NotFound";
import NavbarRoutes from "./NavbarRoutes";
import RoutePrefixes from "./RoutePrefixes";
import API from "./API";
import JsonServerAPI from "./JsonServerAPI";
import UsersAPI from "./UsersAPI";

// default exported component is imported without using {} curly braces
// named exported component is imported by using {} curly braces around them

const myName = 'Avishkar';

// Creating & returning App component
function App() { // Components name should start with capital letters

  const [displayComponent, setDisplayComponent] = useState(true);

  const obj = {
    name: "Avishkar",
    id: 1194,
    company: "Microsoft"
  }

  let clgNames = ['COEP', 'PICT', 'VIT', 'DYP'];

  const [nameState, setNameState] = useState('Avishkar');

  const [user, setUser] = useState('');

  return (
    // Entire code which you return must be wrapped in a wrapper like div.
    // Here we are using <>Fragment tag</>.
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
      {/* <Events /> */}

      {/* States */}

      {/* Toggling to show/hide the component using states */}
      {/* <button onClick={() => displayComponent?setDisplayComponent(false):setDisplayComponent(true)}>Toggle to hide/show the states component</button> */}
      <br />
      {/* Logic to display or hide the component */}
      {/* {
        displayComponent?<States />:null
      } */}

      {/* Props */}

      {/* Passing variables and values as props to component */}
      {/* <Props name={myName} id={1194} company="Microsoft" /> */}

      {/* Passing object as props */}
      {/* <Props propsObj={obj} /> */}

      {/* Passing array as props */}
      {/* <Props propsArr={clgNames} /> */}

      {/* Passing state as props */}
      {/* <button onClick={() => nameState==="Avishkar"?setNameState("Aniket"):setNameState("Avishkar")}>Click to change the name</button> */}
      {/* Displaying Props component conditionally */}
      {/* {
        nameState===undefined?null:<Props name={nameState} />
      } */}

      {/* Passing function as props */}
      {/* <Props myFun = {add} /> */}

      {/* Calling Props component without passing props, to use default props */}
      {/* <Props />
      <Props name="Aniket"/> */}

      {/* Sending JSX as props and adding inline style to jsx element */}
      {/* <Props colour="red"> */}
      {/* Inside this Props component, you can write all jsx code to pass as props */}
      {/* <h2>Hey {myName}</h2>
        <h2 style={{color:"green", fontStyle:"italic"}}>Hello guys</h2> */}
      {/* </Props> */}

      {/* <ControlledComponent /> */}

      {/* <CheckBoxes /> */}

      {/* <Radio_Dropdowns /> */}

      {/* <Loops /> */}

      {/* <ShowClock /> */}

      {/* <NestedLooping /> */}

      {/* <UseEffectHook1 /> */}

      {/* <UseEffectHook2 name={nameState} />
      <button onClick={() => nameState === 'Avishkar' ? setNameState('Aniket') : setNameState('Avishkar')}>
        Click me to update name
      </button> */}

      {/* {displayComponent ? <ComponentLifecycle /> : null}
      <button onClick={() => displayComponent ? setDisplayComponent(false) : setDisplayComponent(true)}>ToggleDisplay</button> */}

      {/* <ReactStyle /> */}

      {/* <h1>Using External styling</h1>
      <ExternalStyle /> */}
      {/* Problem is that, External css used in 'ExternalStyle' component will be automatically applied on above h1 tag without importing that css file in this App component file */}

      {/* <h2>Using Css Modules</h2>
      <CssModules /> */}

      {/* <StyledComponent /> */}

      {/* <BootStrap /> */}

      {/* <UseRefHook /> */}

      {/* <UncontrolledComponent /> */}

      {/* <FunctionAsProps /> */}

      {/* <ForwardRef /> */}

      {/* <UseFormStatusHook /> */}

      {/* <UseTransitionHook /> */}

      {/* <PureComponent /> */}

      {/* <DerivedState /> */}

      {/* <LiftingStateUp setUser={setUser} />
      <LiftingStateUp2 user={user} /> */}

      {/* <UpdateObjectState /> */}

      {/* <UpdateArrayInState /> */}

      {/* <UseActionStateHook /> */}

      {/* <UseIdHook /> */}

      {/* <FragmentTag /> */}

      {/* <CustomHook /> */}

      {/* <College /> */}
      {/* Context API */}

      {/* <ReactRouter /> */}

      {/* <NavbarRoutes /> */}

      {/* <RoutePrefixes /> */}

      {/* <API /> */}

      {/* <JsonServerAPI /> */}

      <UsersAPI />

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
function sum() {
  return 10 + 8;
}

function add(num1, num2) {
  return num1 + num2;
}

// Exporting App component
export default App;