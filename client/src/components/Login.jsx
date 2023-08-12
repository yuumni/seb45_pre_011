import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
  };

  return (
    <>
      <div className="login box">
        <div className="emailpart">
          <div className="guide">
            <div className="text">Email</div>
          </div>
          <input
            className={`inputprofile ${invalidEmail ? "invalid" : ""}`}
            placeholder="Enter the email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <div className="warn">
            <div
              className={`inaccurateemail warningmsg ${
                invalidEmail ? "show" : ""
              }`}
            >
              이메일 형식이 올바르지 않습니다
            </div>
          </div>
          <div className="warn">
            <div className="incorrectemail warningmsg">
              이메일이 일치하지 않습니다
            </div>
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
          <div className="warn">
            <div className="incorrectpwd warningmsg">
              비밀번호가 일치하지 않습니다
            </div>
          </div>
        </div>
        <div className="loginbutton" onClick={handleLogin}>
          Log in
        </div>
      </div>
    </>
  );
}

export default Login;
