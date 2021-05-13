// import { accountService } from '../_services';

const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

export function initFacebookSdk() {
  return new Promise(resolve => {
      // wait for facebook sdk to initialize before starting the react app
      window.fbAsyncInit = function () {
          window.FB.init({
              appId: facebookAppId,
              cookie: true,
              xfbml: true,
              version: 'v10.0'
          });
          // console.log(window.FB,'inside initFacebook')
          // auto authenticate with the api if already logged in with facebook
   
          // let fbAuthButton = document.getElementById('fb-auth')
          // fbAuthButton.addEventListener('click', function(evt){
          window.FB.api(
              "/105682011703154/picture?redirect=false",
              function (response) {
                if (response && !response.error) {
                  console.log('response in init-facebook fb.api',response)
                }
                console.log(response.error)
          })
          // );
          window.FB.getLoginStatus(function(response) {
            console.log(response, 'in init-facebook fb.getLoginStatus')
            if (response.status === 'connected') {
              // The user is logged in and has authenticated your
              // app, and response.authResponse supplies
              // the user's ID, a valid access token, a signed
              // request, and the time the access token 
              // and signed request each expire.
              var uid = response.authResponse.userID;
              var accessToken = response.authResponse.accessToken;
              console.log(uid, accessToken,'userid and accessToken')
            } else if (response.status === 'not_authorized') {
              // The user hasn't authorized your application.  They
              // must click the Login button, or you must call FB.login
              // in response to a user gesture, to launch a login dialog.
            } else {
              // The user isn't logged in to Facebook. You can launch a
              // login dialog with a user gesture, but the user may have
              // to log in to Facebook before authorizing your application.
            }
           });
      };
      // load facebook sdk script
      (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) { return; }
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));    
  });
}