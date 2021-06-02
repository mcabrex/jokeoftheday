import FacebookLogin from 'react-facebook-login';

import './JokeIntro.css'
import Secure from './secure.svg'

const JokeIntro = (params) => {
    const apikey = process.env.REACT_APP_FACEBOOK_APP_ID

    const responseFacebook = (response) => {
        let {picture} = response
        console.log('authed',response,picture);
    }

    return(
        <div className="joke-content">
            <h1>Just One Thing</h1>
            <img src={Secure}/>
            <p>In order to create the perfect joke, Joke of the Day uses our complex algorithms in combination with your social media data in order create the ideal experience. And don't worry all our processes our completely serverless. This means that we never store or send your data anywhere else. It's all done by the machine, we never see it. Your secret's safe with us 😉.</p>
            <p>Just sign in with Facebook and we'll handle the rest!</p>
            <FacebookLogin
                appId={apikey}
                fields="name,email,picture"
                callback={responseFacebook} 
                cssClass="fb-login"
                textButton="LOGIN WITH FACEBOOK"
            />
        </div>
    )
}

export default JokeIntro
