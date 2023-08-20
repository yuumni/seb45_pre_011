import React from "react";
import stackoverflowLogo from "../assets/stackoverflowLogo.svg";
import OAuth from "./OAuth";
import Login from "./Login";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="app-container">
      <div className="loginpage">
        <img src={stackoverflowLogo} alt="stackoverflow" className="mainlogo" />
        <OAuth />
        <Login />
        <div className="guidemsg">
          계정이 없으신가요? <Link to='/sign-up'><span className="signupmsg">회원가입</span></Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
