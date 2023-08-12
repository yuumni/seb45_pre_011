import React, { useState, useEffect, useRef } from "react";
import "./Login.css";

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState(""); // 사용자가 입력한 이메일 값을 저장
  const [invalidEmail, setInvalidEmail] = useState(false); // 이메일 유효성 검사가 실패한 경우

  const [pwd, setPwd] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // userRef 초기값이 null, undefined 등의 상태에서 focus 호출해서 생기는 오류 방지를 위한 조건문
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []); // 처음 랜더링되면 입력란에 커서 깜빡이게 해주려고

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

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

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setInvalidEmail(true);
      setSuccess(false); // 이메일 형식 유효성 검사 탈락
    } else {
      setInvalidEmail(false); // 이메일 형식 유효성 검사 통과했으면
      setSuccess(true); // 여기서부터 axios와 리덕스 사용해야 될 듯
    }
    console.log(email, pwd);
    setEmail("");
    setPwd("");
  };

  return (
    <>
      {success ? (
        <div>테스트 로그인 성공</div>
      ) : (
        <form className="login box" onSubmit={handleLogin}>
          <div className="emailpart">
            <div className="guide">
              <div className="text">Email</div>
            </div>
            <input
              className={`inputprofile ${invalidEmail ? "invalid" : ""}`}
              placeholder="Enter the email"
              value={email}
              onChange={handleEmailChange}
              ref={userRef}
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
              <div
                className={`incorrectemail warningmsg ${errMsg ? "show" : ""}`}
                ref={errRef}
              >
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
              type="password"
              className="inputprofile"
              placeholder="Enter the password"
              value={pwd}
              onChange={handlePwdChange}
            ></input>
            <div className="warn">
              <div
                className={`incorrectpwd warningmsg ${errMsg ? "show" : ""}`}
              >
                비밀번호가 일치하지 않습니다
              </div>
            </div>
          </div>
          <button className="loginbutton">Log in</button>
        </form>
      )}
    </>
  );
}

export default Login;
