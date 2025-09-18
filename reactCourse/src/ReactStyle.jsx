import { useState } from "react";

function ReactStyle() {

    // We can write all css properties in an object and pass this object to style attribute in react component
    // First we will store that object in a state variable
    const [styleCard, setStyleCard] = useState({
        border: "1px solid gray", 
        borderRadius: "15px", 
        width: "220px", 
        textAlign: "center",
        margin:"20px",
        boxShadow:"1px 2px 3px 0px gray",
        padding:"15px 0px"
    })

    function changeCardStyle(color, bgColor){
        // Using spread operator
        setStyleCard({...styleCard, color:color, backgroundColor:bgColor});
        // Spread operator separates each key-value pair of styleCard object then adds another two keys 'color' and 'backgroundColor' in it and forms another object
    }

    // Another CSS object
    const flexDisplay = {display:'flex', flexWrap:"wrap", justifyContent:"center"};

    const [gridTrue, setGridTrue] = useState(true);

    return (
        <>
            {/* Use of inline style */}
            <h2 style={{ color: "blue", textAlign: "center" }}>Hello Guys</h2>

            <button onClick={() => changeCardStyle('purple', '#ffff0057')} >Yellow Card Style</button>
            <button onClick={() => changeCardStyle('black', 'white')} >Default Card Style</button>
            <button onClick={() => setGridTrue(!gridTrue)} >Toggle Cards Grid</button>

            <div style={gridTrue?flexDisplay:{display:"block"}}>

                <div style={styleCard}>
                    <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                    <h4 style={{ margin: "0px" }}>Avishkar Khude</h4>
                    <p>Software Engineer</p>
                </div>

                <div style={styleCard}>
                    <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                    <h4 style={{ margin: "0px" }}>Avishkar Khude</h4>
                    <p>Software Engineer</p>
                </div>

                <div style={styleCard}>
                    <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                    <h4 style={{ margin: "0px" }}>Avishkar Khude</h4>
                    <p>Software Engineer</p>
                </div>

                <div style={styleCard}>
                    <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                    <h4 style={{ margin: "0px" }}>Avishkar Khude</h4>
                    <p>Software Engineer</p>
                </div>

                <div style={styleCard}>
                    <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                    <h4 style={{ margin: "0px" }}>Avishkar Khude</h4>
                    <p>Software Engineer</p>
                </div>

                <div style={styleCard}>
                    <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                    <h4 style={{ margin: "0px" }}>Avishkar Khude</h4>
                    <p>Software Engineer</p>
                </div>

                <div style={styleCard}>
                    <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                    <h4 style={{ margin: "0px" }}>Avishkar Khude</h4>
                    <p>Software Engineer</p>
                </div>

                <div style={styleCard}>
                    <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                    <h4 style={{ margin: "0px" }}>Avishkar Khude</h4>
                    <p>Software Engineer</p>
                </div>

                <div style={styleCard}>
                    <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                    <h4 style={{ margin: "0px" }}>Avishkar Khude</h4>
                    <p>Software Engineer</p>
                </div>

                <div style={styleCard}>
                    <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                    <h4 style={{ margin: "0px" }}>Avishkar Khude</h4>
                    <p>Software Engineer</p>
                </div>

            </div>
        </>
    )
}

export default ReactStyle;