function Navbar() {
    return (
        <>
            <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
                <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
                <ul className="md:flex font-semibold hidden">
                    <li className="mx-[25px] cursor-pointer"><a href="#">Home</a></li>
                    <li className="mx-[25px] cursor-pointer"><a href="#">About Us</a></li>
                    <li className="mx-[25px] cursor-pointer"><a href="#">Contact Us</a></li>
                </ul>
                <div className="hidden md:block px-2 py-2 bg-indigo-700 rounded cursor-pointer"><button className=" text-white font-bold cursor-pointer">Login/SignUp</button></div>
                <div className="md:hidden">
                    {/* Hamburger Icon */}
                    <a className="text-4xl font-bold" href="#">&#8801;</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

// To make all elements inside div horizontally listed, we use display flex
// justify-center makes all elements horizontally center
// items-center makes all elements vertically center