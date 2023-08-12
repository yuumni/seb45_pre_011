import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="login box">
        <div className="emailpart">
          <div className="guide">
            <div className="text">Email</div>
          </div>
          <input className="inputprofile" placeholder="Enter the email"></input>
          <div className="inaccurateemail warningmsg">
            이메일 형식이 올바르지 않습니다
          </div>
          <div className="incorrectemail warningmsg">
            이메일이 일치하지 않습니다
          </div>
        </div>
        <div className="passwordpart">
          <div className="textgroup">
            <div className="text">Password</div>
            <div className="findpassword">Forget Password?</div>
          </div>
          <input
            className="inputprofile"
            placeholder="Enter the password"
          ></input>
          <div className="incorrectpwd warningmsg">
            비밀번호가 일치하지 않습니다
          </div>
        </div>
        <div className="loginbutton">Log in</div>
      </div>
    </>
  );
}

export default Login;
