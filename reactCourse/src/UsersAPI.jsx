import JsonServerAPI from "./JsonServerAPI";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import { useState } from "react";

// Make sure to start the json server before running this project to get api data properly
// To run json-server
// inside C:\React\API directory enter command >npx json-server db.json 

function UsersAPI() {

    return (
        <>
            <BrowserRouter>
                <Link to="/" style={{ margin: '100px' }}>Home</Link>
                <Link to="/addUser" style={{ margin: '100px' }}>Add User</Link>

                <Routes>
                    <Route path="/" element={<JsonServerAPI />} />
                    <Route path="/addUser" element={<AddUser />} />
                    <Route path="/updateUser/:idParam" element={<UpdateUser />} />
                </Routes>
            </BrowserRouter>

            {/* This outlet element will display particular child element based on selected route */}
            <Outlet />
        </>
    )
}

export default UsersAPI;