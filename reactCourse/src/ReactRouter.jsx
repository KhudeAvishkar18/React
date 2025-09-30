// React router allows us to route to another component file on a button click
// Currently we are using version 7 of react router
// By default react-router will not present, we need to install it by command
// npm install react-router

// While working with react.js, use react-router library not the framework

// Server side routing - If after clicking on particular link (button), if your page is getting refreshed, then that routing request is going to server, hence it is called server side routing

// Client side routing - If after clicking on link (button), if your page changes without refreshing the browser, then that routing is handled at client side, hence it is called cilent side routing

import { BrowserRouter, Routes, Route, Link } from "react-router";
import College from './ContextAPI';

function ReactRouter() {
    return (
        <>
            {/* BrowserRouter component enables client side routing using the browsers history API,
                We can also directly declare this as wrapper of App component inside main.jsx */}
            <BrowserRouter>

                {/* Link component is used to create Links to the routes, these are like anchor tags in html */}
                {/* This is a link to navigate from one page to another */}
                <Link to="/"><h2>Home</h2></Link>
                <Link to="/about"><h2>About</h2></Link>
                <Link to="/contextAPI"><h2>ContextAPI</h2></Link>
                {/* You can also keep all Links in separate component file and import & use that component here instead of writing all links here */}

                {/* Routes component is wrapper for all routes */}
                {/* 'Routes' is responsible for rendering the appropriate component based on the current URL */}
                <Routes>
                    {/* Using Route component we will create each route */}
                    {/* Each Route component defines a path and the corresponding component to render when that path is matched */}
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/contextAPI" element={<College />} />
                    {/* element attribute can take any component or simple html tag */}
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default ReactRouter;