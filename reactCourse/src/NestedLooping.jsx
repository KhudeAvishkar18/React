import { useState } from "react";

function NestedLooping() {

    const collegeData = [
        {
            clgName: 'DYP',
            clgCode: 6272,
            userData: [
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
            ]
        },
        {
            clgName: 'COEP',
            clgCode: 1234,
            userData: [
                {
                    id: 1,
                    name: 'Suyog',
                    age: 23
                },
                {
                    id: 2,
                    name: 'Mahesh',
                    age: 24
                },
                {
                    id: 3,
                    name: 'David',
                    age: 22
                }
            ]
        },
        {
            clgName: 'VIT',
            clgCode: 8541,
            userData: [
                {
                    id: 1,
                    name: 'Pratik',
                    age: 23
                },
                {
                    id: 2,
                    name: 'Yash',
                    age: 24
                },
                {
                    id: 3,
                    name: 'Chinya',
                    age: 22
                }
            ]
        }
    ]

    return (
        <>
            {collegeData.map((obj) => (
                <AnotherComponent obj={obj} />)
            )}
        </>
    )
}

export default NestedLooping;

export function AnotherComponent({ obj }) {
    return (
        <div style={{backgroundColor:"gray", padding:"15px", margin:"15px", borderRadius:"10px"}}>

            <h1 key={obj.clgCode}>{obj.clgName}</h1>

            {obj.userData.map((user) => (
                <ul key={user.id}>
                    <li>Id : {user.id}</li>
                    <li>Name : {user.name}</li>
                    <li>Age : {user.age}</li>
                </ul>
            ))}
            
        </div>
    )
}