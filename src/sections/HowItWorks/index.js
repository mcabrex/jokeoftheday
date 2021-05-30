import './HowItWorks.css'
import data from './data.svg'

const HowItWorks = (params) => {
    return (
        <div className="intro">
            <img className="intro-img" src={data} />
            <div className="intro-content">
            <h1 className="name">How It Works</h1>
            <p>Using social media to create a personalized experience!</p>
            </div>
        </div>
    )
}

export default HowItWorks