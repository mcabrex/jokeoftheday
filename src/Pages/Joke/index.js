import React, { useState } from 'react'

import Intro from './Intro'

const Joke = (params) => {
    const apikey = process.env.REACT_APP_FACEBOOK_APP_ID

    const responseFacebook = (response) => {
        let {picture} = response
        console.log('authed',response,picture);
    }

    return(
        <Intro apiKey={apikey} handleResponse={responseFacebook}/>
    )
}

export default Joke
