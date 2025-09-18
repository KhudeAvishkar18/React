function Loops() {

    const userData = [
        {
            id: 1,
            name: 'Avishkar',
            age: 23
        },
        {
            id: 2,
            name: 'Aniket',
            age: 24
        },
        {
            id: 3,
            name: 'Bunty',
            age: 22
        }
    ];  // Array of objects

    return (
        <>
            <h2>Welcome to loops in JSX</h2>
            {/* We are looping all elements of an array using map() method */}

            <table border={"1px solid black"} cellPadding={'10 px'}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) =>
                    // Each tr is uniquely identified by using key = user.id to avoid error in js console
                    (<tr key={user.id}> 
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>)
                    )}
                </tbody>
            </table>

            
            {/* Using one component multiple times using loops and also passing data to it */}
            { userData.map((user) => <AnotherComponent data={user} key={user.id}/>) }
            {/* passing each object of userData array as prop to AnotherComponent component */}
        </>
    )
}

export default Loops;

export function AnotherComponent({data}){
    return(
        <div style={ {border:"1px solid green", margin:"20px", textAlign:"center", borderRadius:"15px"} }>
            <h4>Id : {data.id}</h4>
            <h4>Name : {data.name}</h4>
            <h4>Age : {data.age}</h4>
        </div>
    )
}