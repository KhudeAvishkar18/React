// 'use' is an API not a Hook.

import { Suspense, use } from "react";

// Calling an API using fetch() API method
const apiResponse = () => {
    return fetch('https://dummyjson.com/users').then((res) => res.json());
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
    // userData is the actual data present inside promise
    // here 'use' resolved the promise and returned data present in that promise
    const users = userData.users;
    // Inside userData, users is the array of 30 users
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