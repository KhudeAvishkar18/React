import { BrowserRouter, Routes, Route, Link } from "react-router";
import NavbarCss from "./css/Navbar.module.css";

// Route Prefix is nothing but adding something before a route path, to make that path more specific
// In this tutorial we will add single/multiple prefixes to our routes

function RoutePrefixes() {
    return (
        <>
            <BrowserRouter>
                {/* Navbar links */}
                <div className={NavbarCss.routes}>
                    <ul className={NavbarCss.ul}>
                        <li><Link className={NavbarCss.routingLinks} to="/">Home</Link></li>
                        <li><Link className={NavbarCss.routingLinks} to="/in/user/about">About</Link></li>
                        <li><Link className={NavbarCss.routingLinks} to="/in/user/contact">Contact</Link></li>
                    </ul>
                </div>

                <Routes>
                    <Route>
                        <Route path="/" element={<h1>Avishkar</h1>} />
                        {/* Adding Route Prefixes */}
                        <Route path="in">    {/* Now we grouped all below paths inside 'in' route */}
                            <Route path="/in/user">
                                <Route path="/in/user/about" element={<h1>About Us</h1>} />
                                <Route path="/in/user/contact" element={<h1>Contact Us</h1>} />
                            </Route>
                        </Route>
                        {/* An absolute child route path must start with the combined path of all its parent routes. */}
                        {/* That means each child path should contain all of its parent paths */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutePrefixes;