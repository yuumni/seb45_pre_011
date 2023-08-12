import React from "react";
import googleLogo from "../assets/googleLogo.svg";
import facebookLogo from "../assets/facebookLogo.svg";
import githubLogo from "../assets/githubLogo.svg";
import "./OAuth.css";

function OAuth() {
  return (
    <>
      <div className="social google">
        <div className="googlecontents">
          <img src={googleLogo} alt="Google Logo" className="logo" />
          Log in with Google
        </div>
      </div>
      <div className="social github">
        <div className="githubcontents">
          <img src={githubLogo} alt="Github Logo" className="logo" />
          Log in with GitHub
        </div>
      </div>
      <div className="social facebook">
        <div className="facebookcontents">
          <img src={facebookLogo} alt="Facebook Logo" className="logo" />
          Log in with Facebook
        </div>
      </div>
    </>
  );
}

export default OAuth;
