import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePwdChange = (event) => {
    setPwd(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      login({
        email: email,
        password: pwd,
        loggedIn: true,
      })
    );
  };

  return (
    <>
      <form className="login box" onSubmit={(event) => handleSubmit(event)}>
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
        </div>
        <div className="passwordpart">
          <div className="textgroup">
            <div className="text">Password</div>
            <div className="findpassword">Forget Password?</div>
          </div>
          <input
            type="password"
            className="inputprofile"
            placeholder="Enter the password"
            value={pwd}
            onChange={handlePwdChange}
          ></input>
          <div className="warn">
            <div className="incorrect warningmsg">
              일치하는 회원정보가 없습니다
            </div>
          </div>
        </div>
        <button className="loginbutton" onClick={handleLogin}>
          Log in
        </button>
      </form>
    </>
  );
}

export default Login;
