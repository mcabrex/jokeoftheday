import React, { useState } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';


function App() {
  const [imageSrc, setImageSrc] = useState("https://c8.alamy.com/comp/M4MCPC/funny-clown-with-a-gun-pistol-isolated-on-white-background-M4MCPC.jpg");

  const apikey = process.env.REACT_APP_FACEBOOK_APP_ID
  
  const responseFacebook = (response) => {
    console.log(response);
    let {picture} = response
    setImageSrc(picture.data.url)
  }
  
  return (
    <div className="App">
      <div id="joke-container">
        <h1 id="name">JOKE GENERATOR</h1>
        <img id="clown-img" src={imageSrc} />
        <div id="description">
          Jokes on you!
        </div>
        <FacebookLogin
          appId={apikey}
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook} 
        />
        {/* <button class="btn oauth">
          Sign in to Facebook
        </button> */}
        {/* fake loading spinner */}
        {/* text doc for generator*/}
        {/*ouath to facebook  */}
      </div>

    </div>
  );
}

export default App;
