import './HowItWorks.css'
import data from './data.svg'

const HowItWorks = (params) => {
    return (
        <div className="how" id="work">
            <div className="how-content">
            <h1 className="how-name">How It Works</h1>
            <p>Humor is subjective and everyone perceives jokes differently. In order to achieve a truly perfect joke, you need to create a joke that is tailor made to the individual. By combining cutting edge data science and complex machine learning algorithms we have created a joke matrix that uses social media data to constantly evolve and give you the perfect joke, all at the click of a button!</p>
            </div>
            <img className="how-img" src={data} />
        </div>
    )
}

export default HowItWorks