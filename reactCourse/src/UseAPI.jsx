// 'use' is an API not a Hook.
// 'use' is a React API that lets you read the value of a resource like a Promise or context.

// Here we will read value of data returned by an api in the form of promise by using 'use' api.

import { Suspense, use } from "react";

// Calling an API using fetch() API method
const apiResponse = async () => {
    return await fetch('https://dummyjson.com/users').then((res) => res.json());
}
// Calling api outside of component to avoid rerendering of component and recalling of api

// Storing API response in a variable userResource
const userResource = apiResponse();

function UseAPI(){
    return(
        <>
            <h2>use API in React</h2>

            {/* Use of suspense with 'use' api is mandatory to avoid infinite calling to api */}
            <Suspense fallback={<h3>Loading ...</h3>}>
                <User userResource = {userResource}/>
            </Suspense>
        </>
    )
}

export default UseAPI;

// Taking API response as a prop and fetching data from that promise using 'use' API
function User({userResource}){
    // userResource is a promise returned by api

    const userData = use(userResource);
    // userData is the actual data object present inside promise, which we accessed by using 'use' api
    // here 'use' resolved the promise and returned data present in that promise

    const users = userData.users;
    // Inside users is the array of 30 users present inside userData object

    return(
        <>
        {
            users.map((user) => (
                <p key={user.id}>{user.firstName}</p>
            ))
        }
        </>
    )
}