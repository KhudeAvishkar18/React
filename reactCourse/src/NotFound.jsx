import { Link } from "react-router";

function NotFound() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Page not found</h2>

            <img style={{ width: '40%', display: 'block', margin: 'auto' }} src="https://media.istockphoto.com/id/860463522/vector/404-error-page-template-for-website-404-alert-flat-design.jpg?s=612x612&w=0&k=20&c=ad0D5cQqnRMRcyQtaFdrk4GgO9LYRYl06V4MReZKsOE=" alt="Not Found Image" />
            <Link style={{ textDecoration: 'none', backgroundColor: "lightblue", padding: "5px", border: "1px solid blue", borderRadius: "5px", fontWeight:"bold" }} to="/" >Go to Homepage</Link>
        </div>
    )
}

export default NotFound;