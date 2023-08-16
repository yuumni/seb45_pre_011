import React from "react";
import googleLogo from "../../assets/googleLogo.svg";
import "../OAuth.css";

// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";

function GoogleSocialLogin() {
  // <GoogleOAuthProvider clientId="827948915166-81cm3i1ni6pon1bk4n4u9l8mq44nsmte.apps.googleusercontent.com">
  //     <GoogleLogin
  //       onSuccess={(credentialResponse) => {
  //         var decoded = jwt_decode(credentialResponse.credential);
  //         console.log(decoded);
  //       }}
  //       onError={() => {
  //         console.log("Login Failed");
  //       }}
  //     />
  //   </GoogleOAuthProvider>

  return (
    <div className="social google">
      <div className="googlecontents">
        <img src={googleLogo} alt="Google Logo" className="logo" />
        Log in with Google
      </div>
    </div>
  );
}

export default GoogleSocialLogin;
