import './AboutUs.css'
import company from './company.svg'

const AboutUs = (params) => {
    return (
        <div className="about" id="about">
            <img className="about-img" src={company} />
            <div className="about-content">
            <h1 className="about-name">What We're About</h1>
            <p className="description">
                Here at JoTD, our team of experienced technicians have been working tirefully around the clock to solve one of life's biggest questions: 
            </p>
            <p className="quote">
                Is it possible to tell the perfect joke?
            </p>  
            <p>
                Through countless years of research we think we've come up with a solution. To us it's not about just telling the perfect joke, it's about creating the ultimate experience.
            </p>
            </div>
        </div>
    )
}

export default AboutUs