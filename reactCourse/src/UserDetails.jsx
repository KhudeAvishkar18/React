import { useParams, Link } from "react-router";

function UserDetails(){

    // useParams() hook is used to fetch value of parameters from url path
    let paramsData = useParams();
    // paramsData will contain object containing all parameters present in url path

    return (
        <>
            <h2>User Details with Id : {paramsData.id}</h2>
            {/* paramsData.id will give us id parameter from url path */}

            <Link to='/users' style={{textDecoration:'none'}}><h3>Back to Users</h3></Link>
        </>
    )
}

export default UserDetails;