import {TextButton} from '../../textButton'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
            <Link to="/thejoke">
                <TextButton label="Get Started!" hover="true" onClick={()=>{console.log('clicked')}}/>
            </Link>
        </div>
    )
}

export default GetStarted
