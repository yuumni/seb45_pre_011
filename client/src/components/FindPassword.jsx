import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNickname,
  setEmail,
  selectFindPwd,
} from "../features/findPasswordSlice";
import "./FindPassword.css";
import axios from "axios";
import { ResetPassword } from "./ResetPassword";

function FindPassword() {
  const dispatch = useDispatch();
  const { nickname, email } = useSelector(selectFindPwd);
  const [userFound, setUserFound] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);

  const handleNicknameChange = (e) => {
    dispatch(setNickname(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 서버로 입력값 전송하여 회원 정보 확인
      const response = await axios.post("/api/checkUser", {
        nickname,
        email,
      });

      if (
        response.data.userFound
        // 실제로는 백엔드 쪽 로직에 맞춰 작성 필요
      ) {
        setUserFound(true); // 실제로는 백엔드 쪽 로직에 맞춰 작성 필요
      }
    } catch (error) {
      console.error("Error checking user:", error);
      setInvalidUser(true);
    }
  };

  if (userFound) {
    return <ResetPassword nickname={nickname} email={email} />;
  }

  return (
    <div className="forgot-password-form">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nickname</label>
          <input
            placeholder="닉네임을 입력하세요"
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            placeholder="이메일을 입력하세요"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {invalidUser && <p>일치하는 회원정보가 없습니다</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FindPassword;
