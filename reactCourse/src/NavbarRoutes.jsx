import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router";
import NewNavbar from "./Navbar";
import College from "./ContextAPI";
import NotFound from "./NotFound";
import MyCollege from "./College";
import Users from "./Users";
import UserDetails from "./UserDetails";

function NavbarRoutes() {
    return (
        <>
            {/* We cant use BrowserRouter inside another BrowswerRouter, hence generally we prefer to declare it inside main.jsx file around App.jsx component */}
            <BrowserRouter>
                {/* Always declare BrowserRouter at top of the component as a wrapper of all */}

                <Routes>
                    {/* Displaying Navbar component only for some particular routes */}
                    <Route element={<NewNavbar />}> {/* This is also called Layout Routes */}
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="/about" element={<College />} />
                        <Route path="/contact" element={<h1>Contact Us</h1>} />

                        {/* Using Optional Segment */}
                        {/* every /element is called as segment, ex. /in, /user, /name etc */}
                        <Route path="/users/list?" element={<Users />} />
                        {/* Here /list is a optional segment, which may be passed or may not be passed in url path, but still our url should work at /users route if no /list is passed */}

                        {/* Dynamic Routing for passing parameter */}
                        <Route path="/users/:id/:name?" element={<UserDetails />} />
                        {/* Here :id is a parameter passed dynamically inside Link tag, :name is another parameter and also it is optional segment */}

                    </Route>

                    {/* Nested Routes */}
                    <Route path="/college" element={<MyCollege />}>

                        {/* By default inside /college we will display students route */}
                        <Route index element={<h1>Students Page</h1>} />    {/* This is also called Index Routes */}
                        {/* Above I used 'index' instead of path as I wants to display this route by default inside /college route */}

                        {/* Dont add / in front of path for nested routes */}
                        <Route path="department" element={<h1>Department Page</h1>} />
                        <Route path="details" element={<h1>Details Page</h1>} />
                    </Route>


                    {/* To route to 'Not found page' on wrong url path */}
                    <Route path="/*" element={<NotFound />} />
                    {/* Make sure to add this /* route at end of all routes, not at the start or between */}

                    {/* To redirect to Home page on wrong url path */}
                    {/* <Route path="/*" element={<Navigate to="/" />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default NavbarRoutes;