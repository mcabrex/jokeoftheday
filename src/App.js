import './App.css';

function App() {
  // const FB = window.FB
  // console.log(window.FB,'HELLOO inside app component')
  function loginWithFB() {
    try{    
      window.FB && window.FB.login(function(response) {
    console.log('response loginWithFB',response)
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          window.FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      })
    } catch(e) {
      console.log(e,'error in loginWithFB')
    }
  }

  return (
    <div className="App">
      <div id="joke-container">
        <h1 id="name">JOKE GENERATOR</h1>
        <img id="clown-img" alt="clown" src="https://c8.alamy.com/comp/M4MCPC/funny-clown-with-a-gun-pistol-isolated-on-white-background-M4MCPC.jpg" />
        <div id="description">
          Jokes on you!
        </div>
        <button id="fb-auth" className="btn" onClick={loginWithFB}>
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

export default App;
