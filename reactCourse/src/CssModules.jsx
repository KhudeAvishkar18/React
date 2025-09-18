import moduleStyle from "./css/CssModules.module.css";
// This is how we can import Css module file

function CssModules() {
    return (
        <>
            <h2 className={moduleStyle.heading}>CssModules</h2>
            {/* As we are giving className specific to module, this css will not be applied inside App.jsx when we use this component in App component */}
            <div className={moduleStyle.card}>
                <img className={moduleStyle.img} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                <h4>Avishkar Khude</h4>
                <p>Software Engineer</p>
            </div>
        </>
    )
}

export default CssModules;