import {TextButton} from '../../textButton'
import {Link} from "react-router-dom";

import './GetStarted.css'

const GetStarted = (params) => {
    return (
        <div className="start" id="started">
            <h1>Whatever Just Give Me The Goods</h1>
            <p>Yea alright we've said enough, if you wanna see the perfect joke in action all you have to do is click the button down below to get started. Best of all, it's completely free!</p>
            <Link to="/thejoke">
                <TextButton label="Get Started!" hover="true"/>
            </Link>
        </div>
    )
}

export default GetStarted
