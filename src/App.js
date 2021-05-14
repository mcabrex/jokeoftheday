import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';
import Description from './components/Description'

export default function App() {
  const [imageSrc, setImageSrc] = useState("https://c8.alamy.com/comp/M4MCPC/funny-clown-with-a-gun-pistol-isolated-on-white-background-M4MCPC.jpg");
  const apikey = process.env.REACT_APP_FACEBOOK_APP_ID

  let imageIsDefault = imageSrc.includes('clown')
  
  const responseFacebook = (response) => {
    console.log(response);
    let {picture} = response
    setImageSrc(picture.data.url)
  }

  return (
    <div className="App">
      <div id="joke-container">
        <h1 id="name">JOKE GENERATOR</h1>
        <img id="clown-img" src={imageSrc} alt=""/>
        <Description imageIsDefault={imageIsDefault}/>
        {imageIsDefault && <FacebookLogin
          appId={apikey}
          autoLoad={true}
          fields="name,email,picture"
          cssClass="fb-auth"
          callback={responseFacebook} 
        />}
        {/* fake loading spinner */}
        {/* text doc for generator*/}
      </div>
    </div>
  );
}