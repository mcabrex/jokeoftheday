import smiling from './smile.svg'
import FacebookLogin from 'react-facebook-login';
import './Intro.css'

const Intro = (params) => {
    const apikey = process.env.REACT_APP_FACEBOOK_APP_ID

    const responseFacebook = (response) => {
        let {picture} = response
        console.log(response,picture);
    }

    return (
        <div className="intro">
            <div className="intro-content">
            <h1 className="intro-name">Joke Of The Day</h1>
            <p>Using data driven science to create the perfect joke.</p>
            {/* <FacebookLogin
                appId={apikey}
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook} 
            /> */}
            </div>
            <img className="intro-img" src={smiling} />
        </div>
    )
}

export default Intro