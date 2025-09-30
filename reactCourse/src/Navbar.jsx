import { Link, Outlet, NavLink } from "react-router";
import NavbarCss from "./css/Navbar.module.css";

// Difference between Link and NavLink element is that NavLink element provides us 'active' class, which Link doesn't
// By using that 'active' class, we can style the elements which are currently active i.e. selected
// import NavLink component from react-router
// select .active class in css file to style the active element

function NewNavbar() {
  return (
    <>
      <div className={NavbarCss.navbar}>

        {/* Logo */}
        <div className={NavbarCss.logo}>
          <Link className={NavbarCss.logoLink} to="/"><h1>LOGO</h1></Link>
        </div>

        {/* Navbar links */}
        <div className={NavbarCss.routes}>
          <ul className={NavbarCss.ul}>
            <li><NavLink className={NavbarCss.routingLinks} to="/">Home</NavLink></li>
            <li><NavLink className={NavbarCss.routingLinks} to="/about">About</NavLink></li>
            <li><NavLink className={NavbarCss.routingLinks} to="/contacttt">Contact</NavLink></li>
            <li><NavLink className={NavbarCss.routingLinks} to="/college">College</NavLink></li>
            <li><NavLink className={NavbarCss.routingLinks} to="/users">Users</NavLink></li>
            <li><NavLink className={NavbarCss.routingLinks} to="/users/list">List</NavLink></li>
          </ul>
        </div>

      </div>

      {/* Diplaying particular component/html on clicking on particular link */}
      <Outlet />
      {/* Outlet component is used to show data of child route, which can be any component or any html tag */}
    </>
  )
}

export default NewNavbar;