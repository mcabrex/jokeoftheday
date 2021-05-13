import './App.css';
import React, {Component} from 'react';

export default class App extends Component {
    // const FB = window.FB
  // console.log(window.FB,'HELLOO inside app component')
  constructor(props) {
    super(props);
    this.state = {userId: '', imageUrl: 'https://c8.alamy.com/comp/M4MCPC/funny-clown-with-a-gun-pistol-isolated-on-white-background-M4MCPC.jpg'};

    this.loginWithFB = this.loginWithFB.bind(this)
    this.setStateHack = this.setStateHack.bind(this) 
  }

  setStateHack(key,value){
    this.setState({[key]: value})
  }
  loginWithFB() {
    try{    
      window.FB && window.FB.login(function({authResponse}) {
        if (authResponse) {
          // console.log('Welcome!  Fetching your information.... ');
           window.FB.api('/me', function(response) {
            window.FB.api(
              `/${response.id}/picture?redirect=false`,
              function (response) {
                if (response && !response.error) {
                  // console.log('response from LOGIN BUTTON PICTURE CALL',response)
                  console.log(this,'this deepest', response.data.url)  
                  this.setState({imageUrl: response.data.url})
                }
                console.log(response.error)
            }.bind(this))
          }.bind(this))
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      }.bind(this))
    } catch(e) {
      console.log(e,'error in loginWithFB')
    }
  }

  render  () {
    return (
      <div className="App">
        <div id="joke-container">
          <h1 id="name">JOKE GENERATOR</h1>
          <img id="clown-img" alt="clown" src={this.state.imageUrl} />
          <div id="description">
            Jokes on you!
          </div>
          <button id="fb-auth" className="btn" onClick={this.loginWithFB}>
            Sign in to Facebook
          </button>
          {/* <div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="false"></div> */}
          {/* fake loading spinner */}
          {/* text doc for generator*/}
          {/*ouath to facebook  */}
        </div>

      </div>
    );
  }
}