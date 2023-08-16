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

      // 서버에서 받아온 엑세스 토큰 추출
      const accessToken = response.data.accessToken;

      // 서버에서 받아온 토큰을 로컬 스토리지에 저장해서...
      localStorage.setItem("token", accessToken);

      // ...엑세스 토큰 헤더에 담아서 요청 보내는 악시오스 문법
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      // 서버에서 받아온 토큰을 사용하여 Redux 상태 업데이트
      dispatch(
        login({
          email: email,
          loggedIn: true,
        })
      );

      // 얘는 그냥 잘 받아졌나 확인하는 정도
      console.log({
        이메일: email,
        엑세스토큰: accessToken,
        비밀번호: pwd,
      });

      // 로그인 성공 시 다른 화면으로 이동하거나 상태를 변경하는 로직 추가 필요
      // 예시: history.push("/dashboard");
      // 지금은 단순히 메시지 띄우는 정도로
    } catch (error) {
      console.error("Login error:", error);
      setLoginError(true);
      if (error.response.status === 401) {
        // 토큰 만료 또는 유효하지 않은 경우
        // 여기서는 로그아웃 처리를 해주어야 할 것입니다.
      } else {
        // 다른 에러 처리
      }
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
