import smiling from './smile.svg'
import './Intro.css'

const Intro = (params) => {
    return (
        <div className="intro">
            <div className="intro-content">
            <h1 className="intro-name">Joke Of The Day</h1>
            <p>Using social media and data driven science to create the perfect joke.</p>
            </div>
            <img className="intro-img" src={smiling} />
        </div>
    )
}

export default Intro