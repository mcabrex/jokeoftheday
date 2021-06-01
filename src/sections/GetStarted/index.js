import {TextButton} from '../../textButton'

import './GetStarted.css'

const GetStarted = (params) => {
    const apikey = process.env.REACT_APP_FACEBOOK_APP_ID

    const responseFacebook = (response) => {
        let {picture} = response
        console.log(response,picture);
    }

    return (
        <div className="start" id="started">
            <h1>Whatever Just Give Me The Goods</h1>
            <p>Yea alright we've said enough, if you wanna see the perfect joke in action all you have to do is click the button down below to get started. Best of all, it's completely free!</p>
            <TextButton label="Get Started!"/>
        </div>
    )
}

export default GetStarted
