// importing external css file in which css is written for elements from this component
import './css/externalStyle.css'
// The problem with external css is that it automatically get applies on parent and child components of any component unnecessarily
// That means, when this below 'ExternalStyle' component is used in App comoponent, above css will work on App component as well, even if we dont import this css file in App component
// To solve this problem we generally use Css modules instead of external css

function ExternalStyle() {
    return (
        <>
            <h1>Use of External style</h1>
            <div className="card">
                <img className='img' src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="UserImage" />
                <h4>Avishkar Khude</h4>
                <p>Software Engineer</p>
            </div>
        </>
    )
}

export default ExternalStyle;