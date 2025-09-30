import { Link, Outlet } from "react-router";

function MyCollege() {

    const linkStyle = {
        textDecoration: 'none',
        fontWeight: 'bold',
        display: 'inline',
        margin:'30px'
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            
            <h1>Students Component</h1>

            {/* Links for Nested Routes */}
            <ul style={{ margin: 'auto', listStyle: 'none', padding: '10px'}}>
                <li style={linkStyle}><Link style={{textDecoration:'none'}} to="" >Students</Link></li>
                {/* I made this Students link as default, hence not given any path inside 'to' attribute of Link, so when you click on this link it will automatically route to its parent route i.e. /college */}
                <li style={linkStyle}><Link style={{textDecoration:'none'}} to="department">Department</Link></li>
                <li style={linkStyle}><Link style={{textDecoration:'none'}} to="details">Details</Link></li>
            </ul>

            {/* The component which contains nested routes must use this 'Outlet' component inside it to display specific data on specific nested route*/}
            <Outlet />
            {/* This component will display specific component/html on specific nested route */}

            <h2 style={{backgroundColor:"lightblue", display:'inline', padding:'5px', borderRadius:'5px'}}><Link style={{textDecoration:'none'}} to="/">Go to Home</Link></h2>

        </div>
    )
}

export default MyCollege;