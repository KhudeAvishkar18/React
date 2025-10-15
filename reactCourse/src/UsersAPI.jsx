import JsonServerAPI from "./JsonServerAPI";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import { useState } from "react";

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

            <Outlet />
        </>
    )
}

export default UsersAPI;