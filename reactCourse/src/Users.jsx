import { Link } from 'react-router';

const users = [
    { id: 1, name: "Avishkar" },
    { id: 2, name: "Aniket" },
    { id: 3, name: "Abhishek" }
];

function Users() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Users List with only id parameter</h1>

            <ul style={{ textAlign: 'center'}}>
                {
                    users.map((item) => (
                        <li key={item.id} style={{textDecoration:'none'}}><Link to={'/users/' + item.id}>{item.name}</Link></li>
                        // This is how we can provide parameter value to the route by concatenation of route path and parameter value
                    ))
                }
            </ul>

            <h1 style={{ textAlign: 'center' }}>Users List with id and optional Name Parameter</h1>

            <ul style={{ textAlign: 'center'}}>
                {
                    users.map((item) => (
                        <li key={item.id} style={{textDecoration:'none'}}><Link to={'/users/' + item.id + '/' + item.name}>{item.name}</Link></li>
                        // This is how we can provide parameter value to the route by concatenation of route path and parameter value
                    ))
                }
            </ul>

        </>
    )
}

export default Users;