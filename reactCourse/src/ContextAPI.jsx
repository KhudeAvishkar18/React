/* 

Consider a scenario, there are list of components, one inside another
College -> Class -> Student -> Subject

Now if I wants to pass data from College component to Subject component, how can I pass
One way is by using props i.e. Pass props inside Class component from College component, then from Class component into Student component and then from Student component to Subject component - This way is called 'Props Drilling'

This is not a reliable method to pass data from College component to Subject component, Instead of it, we use Context API.

1) createContext() - To initiate Context API with some default data
2) <contextVariable.Provider> - To update or provide data to context API
3) useContext() - To get/access data from context API

Context API is nothing but a data variable created and exported from one file, which we can use in any component, also we can update it from any component

In simple words, by using Context API, we can declare context data using createContext() in one file and export it
Then in any component we can override that data by using value attribute inside contextVariable.Provider tag
Then we can use that data in any component by using useContext()

*/

import { useContext, useState } from "react";
import { subjectContext } from "./ContextData";
// Open ContextData.jsx file to learn more about, how to declare context API.

function College() {

    const [subject, setSubject] = useState('');

    return (
        // Adding a wrapper of contextVariable.Provider around component
        < subjectContext.Provider value={subject} >
            {/* In this way we can override default value of context api data in any component  */}

            <div style={{ backgroundColor: "violet", padding: "10px" }}>
                <h1>College</h1>

                <select value={subject} onChange={(event) => setSubject(event.target.value)}>
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Maths">Maths</option>
                    <option value="History">History</option>
                </select>

                <button onClick={() => setSubject('')}>Clear</button>

                <Class />
            </div>
            
        </subjectContext.Provider >

    )
}

export default College;

export function Class() {
    return (
        <div style={{ backgroundColor: "yellow", padding: "10px" }}>
            <h1>Class</h1>
                <Student />
        </div>
    )
}

export function Student() {
    return (
        <div style={{ backgroundColor: "skyblue", padding: "10px" }}>
            <h1>Student</h1>
            <Subject />
        </div>
    )
}

export function Subject() {

    // Here we will access data from Context API by using useContext() method
    const subjectName = useContext(subjectContext);

    return (
        <>
            <h1 style={{ backgroundColor: "green", padding: "10px" }}>Subject : {subjectName}</h1>
        </>
    )
}