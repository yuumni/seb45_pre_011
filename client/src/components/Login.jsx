import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import axios from "axios";
import FindPassword from "./FindPassword";

function Login() {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [pwd, setPwd] = useState("");
  const [loginError, setLoginError] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setInvalidEmail(true);
      return; // 유효하지 않은 이메일일 경우 로그인 중단
    } else {
      setInvalidEmail(false);
    }

    let body = {
      email,
      password: pwd,
    };

    try {
      // Axios를 사용하여 서버로 POST 요청 전송
      // axios.post 메서드가 http 요청(request) 보내주는 메소드임을 잊지 말자
      const response = await axios.post(
        "http://localhost:3001/user/login",
        body
      );

      // 서버에서 받아온 토큰 추출
      const token = response.data.token;

      // 서버에서 받아온 토큰을 로컬 스토리지에 저장
      localStorage.setItem("token", token);

      // 서버에서 받아온 토큰을 사용하여 Redux 상태 업데이트
      dispatch(
        login({
          email: email,
          token: token,
          loggedIn: true,
        })
      );

      // 로그인 성공 시 다른 화면으로 이동하거나 상태를 변경하는 로직 추가 필요
      // 예시: history.push("/dashboard");
      // 지금은 단순히 메시지 띄우는 정도로
    } catch (error) {
      console.error("Login error:", error);
      setLoginError(true);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const handleForgotPassword = () => {
    setShowModal(true);
  };

  return (
    <>
      <form className="login box" onSubmit={handleSubmit}>
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
            <div className="findpassword" onClick={handleForgotPassword}>
              Forget Password?
            </div>
          </div>
          <input
            type="password"
            className="inputprofile"
            placeholder="Enter the password"
            value={pwd}
            onChange={handlePwdChange}
          ></input>
          <div className="warn">
            <div className={`incorrect warningmsg ${loginError ? "show" : ""}`}>
              일치하는 회원정보가 없습니다
            </div>
          </div>
        </div>
        <button className="loginbutton">Log in</button>
      </form>
      {showModal && <FindPassword onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Login;
