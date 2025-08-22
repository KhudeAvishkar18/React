function JsxComponent() {

    const name = "Avishkar";

    let x = 10;
    let y = 8;

    function myFunc(a, b) {
        return a + b;
    }

    const obj = {
        id: 1194,
        name: "Avishkar"
    }

    let arr = [1, 2, 3, 4, 5];

    return (
        <>
            {/* Using js variable inside html */}
            <h4>My name is {name}</h4>
            <h4>Sum of {x} and {y} is {x + y}</h4>

            {/* Calling js function */}
            <h4>Virat's jersey no. is {myFunc(x, y)}</h4>

            {/* IF else condition using ternary operator */}
            <h4>{x>y?x:y}</h4>

            {/* Accessing array and object elements */}
            <h4>My emp id is : {obj["id"]}</h4>
            <h4>My name is : {obj.name}</h4>
            <h4>3rd array element is : {arr[2]}</h4>
        </>
    )
}

export default JsxComponent;